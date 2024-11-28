import {ProductsBase, ProductsDetails} from "@/pages/api/data/products-data";

export const productRepository = {
    async getProducts(
        productsBase: ProductsBase[],
        productsDetails: ProductsDetails,
        searchQuery?: string
    ) {
        let filteredProducts = productsBase
        if (searchQuery) {
            filteredProducts = productsBase.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filteredProducts.map(product => {
            return {...product, description_short: productsDetails[product.id].description_short};
        });
    },

    async getProductById(id: string, productsBase: ProductsBase[], productsDetails: ProductsDetails) {
        const currentProduct = productsBase.find((product) => product.id === parseInt(id));
        if (currentProduct) {
            return {
                ...currentProduct,
                image: productsDetails[currentProduct.id].image,
                description_long: productsDetails[currentProduct.id].description_long
            }
        }
    }
}