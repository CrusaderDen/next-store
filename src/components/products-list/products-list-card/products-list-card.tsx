import {ProductWithShortDescription} from "@/pages/api/data/products-data";
import Link from "next/link";
import s from "./products-list-card.module.scss";
import {PATH} from "@/consts/route-paths";

type ProductCardProps = {
    product: ProductWithShortDescription;
}

export const ProductsListCard = ({product}: ProductCardProps) => {
    return (
        <Link href={PATH.PRODUCT + product.id} className={s.cardWrapper}>
            <h2 className={s.title}>{product.name}</h2>
            <p className={s.description}>{product.description_short}</p>
            <p className={s.price}>Цена: {product.price} руб.</p>
        </Link>
    )
}