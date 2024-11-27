import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ProductType} from './../../api/data/products-data'
import s from "./index.module.scss";

const ProductDescription = () => {
    const [product, setProduct] = useState<ProductType<'long'>>()
    const router = useRouter();
    const productId = router.query.id;

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                const response = await fetch(`/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            }
            void fetchProduct();
        }
    }, [productId]);

    if (!product) {
        return null
    }

    return (
        <div className={s.cardWrapper}>
            <button className={s.button} onClick={() => router.push('/')}>НА ГЛАВНУЮ</button>
            <h2 className={s.title}>{product.name}</h2>
            <p className={s.title}>Цена: {product.price} руб.</p>
            <img src={product.image}/>
            <p>{product.description_long}</p>
        </div>
    )
}

export default ProductDescription