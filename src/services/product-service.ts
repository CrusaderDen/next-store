import {API_PATH} from "@/consts/route-paths";
import {ProductWithLongDescription, ProductWithShortDescription} from "@/backend/data/products-data";

export const productService = {
    async getProducts(name?: string): Promise<ProductWithShortDescription[]> {
        const query = name ? `?name=${encodeURIComponent(name)}` : '';
        const response = await fetch(API_PATH.PRODUCTS + query);
        return await response.json();
    },
    async getProductById(productId: string): Promise<ProductWithLongDescription> {
        const response = await fetch(API_PATH.PRODUCTS + productId);
        return await response.json();
    }
}