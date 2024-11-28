import {ProductWithLongDescription} from "@/backend/data/products-data";
import type {NextApiRequest, NextApiResponse} from "next";
import {productRepository} from "@/backend/repositories/product-repository";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductWithLongDescription | { message: string }>
) {
    if (req.method === 'GET') {
        const {id} = req.query;
        const product = productRepository.getProductById(id as string)
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({message: 'Товар не найден'});
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}