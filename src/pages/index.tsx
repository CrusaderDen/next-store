import {ProductWithShortDescription} from "@/backend/data/products-data";
import React, {useEffect, useState} from "react";
import {productService} from "@/services/product-service";
import {useRouter} from "next/router";
import s from "./index.module.scss";

import dynamic from "next/dynamic";
import {ProductsListHead} from "@/components/products-list";

const DynamicSearchInput = dynamic(() => import('@/components/search-input').then(mod => mod.SearchInput));
const DynamicProductsList = dynamic(() => import('@/components/products-list').then(mod => mod.ProductsList));

export const getServerSideProps = async () => {
    const products = await productService.getProducts()

    if (!products || products.length === 0) return {
        notFound: true,
    };

    return {
        props: {
            products
        }
    }
}

type ProductsListProps = {
    products: ProductWithShortDescription[];
}

const ProductListPage = ({products}: ProductsListProps) => {

    const [filteredProducts, setFilteredProducts] = useState(products)
    const router = useRouter();
    const {name} = router.query

    //выполняется запрос и обновляется состояние продуктов, если задан query-параметр name
    useEffect(() => {
        if (name) {
            const fetchProducts = async () => {
                try {
                    const filtered = await productService.getProducts(name as string);
                    setFilteredProducts(filtered);
                } catch (error) {
                    console.error("Ошибка при получении отфильтрованных продуктов:", error);
                }
            }
            void fetchProducts()
        } else {
            setFilteredProducts(products) //возвращаются все продукты, если query-параметр name больше не задан
        }

    }, [name, products]);

    return (
        <>
            <ProductsListHead/>
            <main className={s.wrapper}>
                <h1 className={s.title}>Список товаров</h1>
                <DynamicSearchInput placeholder={'Поиск по названию'} debounceInterval={300}/>
                <DynamicProductsList filteredProducts={filteredProducts}/>
            </main>
        </>
    );
};

export default ProductListPage

