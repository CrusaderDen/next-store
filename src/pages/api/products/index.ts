import type {NextApiRequest, NextApiResponse} from "next";
import {products, Products} from "@/pages/api/data/products-data";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Products>
) {
    if (req.method === 'GET') {
        
        res.status(200).json(products);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}