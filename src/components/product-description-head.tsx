import Head from "next/head";
import {ProductWithLongDescription} from "@/pages/api/data/products-data";

type ProductDescriptionHeadProps = {
    product: ProductWithLongDescription
}

export const ProductDescriptionHead = ({product}: ProductDescriptionHeadProps) => {
    return (
        <Head>
            <title>{product.name}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <meta name="og:type" content="website"/>
            <meta name="og:title" content="Чай"/>
            <meta property="og:image" content={product.image}/>
            <meta name="description" content={product.description_long}/>
            <meta name="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/product/${product.id}`}/>
            <meta name="og:site_name" content="Чайная компания"/>
            <meta name="format-detection" content="telephone=no"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};