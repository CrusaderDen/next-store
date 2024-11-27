import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './search-input.module.scss'
import {useDebounce} from "@/hooks/useDebounce";


type SearchInputProps = {
    placeholder: string
    setSearchQuery: (query: string) => void
}

export const SearchInput = ({placeholder, setSearchQuery}: SearchInputProps) => {
    const [searchFieldValue, setSearchFieldValue] = useState('')
    const debounceSetSearchQuery = useDebounce(setSearchQuery, 300)


    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchFieldValue(e.target.value)
    }

    useEffect(() => {
        debounceSetSearchQuery(searchFieldValue)
    }, [searchFieldValue, debounceSetSearchQuery])


    return (
        <div>
            <input placeholder={placeholder} className={s.searchField} type={'text'} onChange={(e) => handleSearchInputChange(e)} value={searchFieldValue}/>
        </div>
    );
};