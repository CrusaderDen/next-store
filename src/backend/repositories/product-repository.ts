import {productsBase, productsDetails} from "@/backend/data/products-data";

export const productRepository = {
    getProducts(searchQuery?: string) {
        let filteredProducts = productsBase
        if (searchQuery) {
            filteredProducts = productsBase.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filteredProducts.map(product => {
            return {...product, description_short: productsDetails[product.id].description_short};
        });
    },

    getProductById(id: string) {
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