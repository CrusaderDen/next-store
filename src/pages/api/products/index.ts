import type {NextApiRequest, NextApiResponse} from "next";
import {ProductWithShortDescription} from "@/backend/data/products-data";
import {productRepository} from "@/backend/repositories/product-repository";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductWithShortDescription[]>
) {
    if (req.method === 'GET') {
        const searchQuery = req.query.name || '';
        const products = productRepository.getProducts(searchQuery as string)
        res.status(200).json(products);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}
