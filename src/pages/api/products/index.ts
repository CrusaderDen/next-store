import type {NextApiRequest, NextApiResponse} from "next";
import {productsBase, productsDetails, ProductWithShortDescription} from "@/pages/api/data/products-data";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductWithShortDescription[]>
) {
    if (req.method === 'GET') {
        const result = productsBase.map(product => {
            return {...product, description_short: productsDetails[product.id].description_short};
        });
        res.status(200).json(result);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Метод ${req.method} не поддерживается`);
    }
}
