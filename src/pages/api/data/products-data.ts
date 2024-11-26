import {details_1} from "@/pages/api/data/details-1";
import {details_5} from "@/pages/api/data/details-5";
import {details_4} from "@/pages/api/data/details-4";
import {details_2} from "@/pages/api/data/details-2";
import {details_3} from "@/pages/api/data/details-3";

export const productsBase: ProductsBase[] = [
    {id: 1, name: 'Премиум "Граф Строганов"', price: 1278,},
    {id: 2, name: 'Жасминовый улун (Тайвань)', price: 2682},
    {id: 3, name: 'Ассам с типсами FTGFOP 1106', price: 1219},
    {id: 4, name: 'Дарджилинг', price: 1672},
    {id: 5, name: 'Улун "Тропический"', price: 810},
];

export const productsDetails: ProductsDetails = {
    1: details_1,
    2: details_2,
    3: details_3,
    4: details_4,
    5: details_5,
};

//types
type ProductsBase = {
    id: number
    name: string
    price: number
};

type ProductsDetails = Record<number, {
    description_short: string
    description_long: string
    image: string
}>;

export type ProductWithShortDescription = ProductsBase & { description_short: string };

export type ProductWithLongDescription = ProductsBase & {
    description_long: string;
    image: string;
}

type ProductVariant = 'short' | 'long';

export type ProductType<T extends ProductVariant> =
    T extends 'short' ? ProductWithShortDescription :
        T extends 'long' ? ProductWithLongDescription :
            never;