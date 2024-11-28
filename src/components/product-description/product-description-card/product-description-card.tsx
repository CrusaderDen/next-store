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
        <article className={s.cardWrapper}>
            <header className={s.header}>
                <button className={s.button} onClick={() => router.push(PATH.ROOT)}>НА ГЛАВНУЮ</button>
                <h1 className={s.title}>{product.name}</h1>
            </header>
            <Image
                className={s.image}
                src={product.image}
                alt="Изображение товара"
                width={300}
                height={300}
            />
            <p className={s.price}>Цена: {product.price} руб.</p>
            <p className={s.description}>{product.description_long}</p>
        </article>
    );
};