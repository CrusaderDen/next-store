import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './search-input.module.scss'
import {useDebounce} from "@/hooks/useDebounce";
import {useRouter} from "next/router";


type SearchInputProps = {
    placeholder: string
    debounceInterval: number
}

export const SearchInput = ({placeholder, debounceInterval}: SearchInputProps) => {
    const router = useRouter();
    const {name} = router.query
    const [queryFlag, setQueryFlag] = useState(false)
    const [searchFieldValue, setSearchFieldValue] = useState('')

    const debounceSetSearchQuery = useDebounce((query: string) => {
        //если query-параметр пустой, убираю его из адресной строки
        if (query === '') {
            void router.push(router.pathname)
        } else {
            //иначе, записываю в адресную строку актуальное состояние запроса
            void router.push({
                pathname: router.pathname,
                query: {...router.query, name: query},
            }, undefined, {shallow: true});
        }
    }, debounceInterval)


    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFieldValue(e.target.value)
    }

    // Флаг для случая, если пользователь ввел путь с query-параметром в адресную строку.
    // При этом значение из параметра name сразу подставится в инпут.
    useEffect(() => {
        if (name && !queryFlag) {
            setSearchFieldValue(name as string)
            setQueryFlag(true)
        } else {
            debounceSetSearchQuery(searchFieldValue)
        }
    }, [searchFieldValue])

    return (
        <div>
            <input placeholder={placeholder} className={s.searchField} type={'text'} onChange={(e) => handleSearchInputChange(e)} value={searchFieldValue}/>
        </div>
    );
};