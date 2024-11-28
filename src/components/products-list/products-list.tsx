import React from 'react';
import {ProductWithShortDescription} from "@/backend/data/products-data";
import s from "./products-list.module.scss";
import {ProductsListCard} from "@/components/products-list/products-list-card";

type ProductsListProps = {
    filteredProducts: ProductWithShortDescription[]
}

export const ProductsList = ({filteredProducts}: ProductsListProps) => {
    const productsList = filteredProducts.map((product: ProductWithShortDescription) => (
        <li key={product.id}>
            <ProductsListCard product={product}/>
        </li>
    ))
    return <ul className={s.productsList}>{productsList}</ul>

};