import {ProductType} from './../../api/data/products-data'
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProductDescriptionHead} from "@/components/product-description/product-description-head/product-description-head";
import {ProductDescriptionCard} from "@/components/product-description/product-description-card/product-description-card";
import {API_PATH} from "@/consts/route-paths";

type ProductDescriptionProps = {
    product: ProductType<'long'>
}

export const getServerSideProps: GetServerSideProps<ProductDescriptionProps> = async (context: GetServerSidePropsContext) => {
    const productId = context.query.id;
    const response = await fetch(API_PATH.PRODUCTS + productId);
    const product = await response.json();

    if (!product.id) return {
        notFound: true
    };

    return {
        props: {
            product
        }
    }
}

const ProductDescription = ({product}: ProductDescriptionProps) => {

    return (
        <>
            <ProductDescriptionHead product={product}/>
            <ProductDescriptionCard product={product}/>
        </>
    )
}

export default ProductDescription