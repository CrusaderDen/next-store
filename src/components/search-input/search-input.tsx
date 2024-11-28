import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './search-input.module.scss'
import {useDebounce} from "@/hooks/useDebounce";
import {useRouter} from "next/router";
import {PATH} from "@/consts/route-paths";


type SearchInputProps = {
    placeholder: string
}

export const SearchInput = ({placeholder}: SearchInputProps) => {
    const router = useRouter();
    const {name} = router.query
    const [queryFlag, setQueryFlag] = useState(false)
    const [searchFieldValue, setSearchFieldValue] = useState('')

    const debounceSetSearchQuery = useDebounce((query: string) => {
        //если query-параметр пустой, убираю его из адресной строки
        if (query === '') {
            void router.push(PATH.ROOT)
        } else {
            //иначе, записываю в адресную строку актуальное состояние запроса
            void router.push({
                pathname: router.pathname,
                query: {...router.query, name: query},
            }, undefined, {shallow: true});
        }
    }, 300)


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