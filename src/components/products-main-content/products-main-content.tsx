import React from 'react';
import s from "./products-main-content.module.scss";
import {SearchInput} from "@/components/search-input/search-input";
import {ProductsList} from "@/components/products-main-content/products-list/products-list";
import {ProductWithShortDescription} from "@/pages/api/data/products-data";

type ProductsMainContentProps = {
    filteredProducts: ProductWithShortDescription[]
}
export const ProductsMainContent = ({filteredProducts}: ProductsMainContentProps) => {
    return (
        <main className={s.wrapper}>
            <h1 className={s.title}>Список товаров</h1>
            <SearchInput placeholder={'Поиск по названию'}/>
            <ProductsList filteredProducts={filteredProducts}/>
        </main>
    );
};