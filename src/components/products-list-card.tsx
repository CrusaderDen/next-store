import {ProductWithShortDescription} from "@/pages/api/data/products-data";
import Link from "next/link";
import s from "@/pages/index.module.scss";

type ProductCardProps = {
    product: ProductWithShortDescription;
}

export const ProductsListCard = ({product}: ProductCardProps) => {
    return (
        <Link href={`/product/${product.id}`} className={s.cardWrapper}>
            <h2 className={s.listItem}>{product.name}</h2>
            <p>Цена: {product.price} руб.</p>
            <p>{product.description_short}</p>
        </Link>
    )
}