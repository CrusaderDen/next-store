import {ProductWithLongDescription} from '@/backend/data/products-data'
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {productService} from "@/services/product-service";
import {ProductDetailsCard, ProductDetailsHead} from "@/components/product-details";

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
            <ProductDetailsHead product={product}/>
            <ProductDetailsCard product={product}/>
        </>
    )
}

export default ProductDescription