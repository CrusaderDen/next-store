import React from 'react';
import s from "./products-main-content.module.scss";
import {ProductWithShortDescription} from "@/pages/api/data/products-data";
import dynamic from "next/dynamic";

const DynamicSearchInput = dynamic(() => import('@/components/search-input/search-input').then(mod => mod.SearchInput));
const DynamicProductsList = dynamic(() => import('@/components/products-main-content/products-list/products-list').then(mod => mod.ProductsList));

type ProductsMainContentProps = {
    filteredProducts: ProductWithShortDescription[]
}
export const ProductsMainContent = ({filteredProducts}: ProductsMainContentProps) => {
    return (
        <main className={s.wrapper}>
            <h1 className={s.title}>Список товаров</h1>
            <DynamicSearchInput placeholder={'Поиск по названию'}/>
            <DynamicProductsList filteredProducts={filteredProducts}/>
        </main>
    );
};