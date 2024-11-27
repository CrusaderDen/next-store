import s from "./product-description-card.module.scss";
import Image from "next/image";
import {ProductWithLongDescription} from "@/pages/api/data/products-data";
import {router} from "next/client";
import {PATH} from "@/consts/route-paths";

type ProductDescriptionCardProps = {
    product: ProductWithLongDescription
}

export const ProductDescriptionCard = ({product}: ProductDescriptionCardProps) => {
    return (
        <div className={s.cardWrapper}>
            <button className={s.button} onClick={() => router.push(PATH.ROOT)}>НА ГЛАВНУЮ</button>
            <h2 className={s.title}>{product.name}</h2>
            <p className={s.title}>Цена: {product.price} руб.</p>
            <Image
                src={product.image}
                alt="Изображение товара"
                width={300}
                height={300}
                // placeholder="blur"
                // blurDataURL={product.blurDataURL}
            />
            <p>{product.description_long}</p>
        </div>
    );
};