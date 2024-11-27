import type {NextApiRequest, NextApiResponse} from "next";
import {productsBase, productsDetails, ProductWithShortDescription} from "@/pages/api/data/products-data";
import {productRepository} from "@/pages/api/repositories/product-repository";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductWithShortDescription[]>
) {
    if (req.method === 'GET') {
        const searchQuery = req.query.name || '';
        const products = await productRepository.getProducts(productsBase, productsDetails, searchQuery as string)
        res.status(200).json(products);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}
