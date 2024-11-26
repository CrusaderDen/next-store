import {Product, products} from "@/pages/api/data/products-data";
import type {NextApiRequest, NextApiResponse} from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product | { message: string }>
) {
    const {id} = req.query;
    if (req.method === 'GET') {
        if (typeof id === 'string') {
            const product = products.find((p) => p.id === parseInt(id));

            if (product) {
                res.status(200).json(product);
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