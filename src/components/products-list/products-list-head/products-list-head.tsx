import Head from "next/head";

export const ProductsListHead = () => {
    return (
        <Head>
            <title>Чай</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8"/>
            <meta name="description"
                  content="Производитель и крупный поставщик лучших сортов чая оптом с доставкой по всей России. Огромный выбор весового чая и кофе! Одни из самых низких цен!"/>
            <meta name="og:type" content="website"/>
            <meta name="og:title" content="ЧАЙ"/>
            <meta name="og:url" content="https://next-store.ivrupo.ru/"/>
            <meta name="og:site_name" content="Чайная компания"/>
            <meta name="format-detection" content="telephone=no"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};