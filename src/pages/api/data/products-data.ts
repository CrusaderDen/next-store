export const products = [
    {id: 1, name: 'Зеленый чай', price: 150, description: 'Освежающий зеленый чай с легким травяным вкусом.'},
    {id: 2, name: 'Черный чай', price: 120, description: 'Классический черный чай с насыщенным вкусом.'},
    {id: 3, name: 'Улун', price: 200, description: 'Полуферментированный чай с цветочным ароматом.'},
    {id: 4, name: 'Травяной чай', price: 100, description: 'Чай из различных трав с успокаивающим эффектом.'},
    {id: 5, name: 'Мате', price: 180, description: 'Южноамериканский чай с бодрящим эффектом.'},
];

export type Product = typeof products[number];
export type Products = Product[]