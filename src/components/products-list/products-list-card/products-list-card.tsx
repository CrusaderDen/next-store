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
            <h2 className={s.listItem}>{product.name}</h2>
            <p>Цена: {product.price} руб.</p>
            <p>{product.description_short}</p>
        </Link>
    )
}