import {productsBase, productsDetails, ProductWithLongDescription} from "@/pages/api/data/products-data";
import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductWithLongDescription | { message: string }>
) {
    const {id} = req.query;
    if (req.method === 'GET') {
        if (typeof id === 'string') {
            const currentProduct = productsBase.find((product) => product.id === parseInt(id));
            if (currentProduct) {
                const result = {
                    ...currentProduct,
                    image: productsDetails[currentProduct.id].image,
                    description_long: productsDetails[currentProduct.id].description_long
                }
                res.status(200).json(result);
            } else {
                res.status(404).json({message: 'Товар не найден'});
            }
        } else {
            res.status(400).json({message: 'Неверный ID товара'});
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}