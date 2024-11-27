import {ProductWithLongDescription} from './../../api/data/products-data'
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {ProductDescriptionHead} from "@/components/product-description/product-description-head/product-description-head";
import {ProductDescriptionCard} from "@/components/product-description/product-description-card/product-description-card";
import {productService} from "@/services/product-service";

type ProductDescriptionProps = {
    product: ProductWithLongDescription
}

export const getServerSideProps: GetServerSideProps<ProductDescriptionProps> = async (context: GetServerSidePropsContext) => {
    const productId = context.query.id;

    const product = await productService.getProductById(productId as string)

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