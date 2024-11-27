import type {AppProps} from "next/app";

import "@/styles/globals.scss";
import '@/styles/nprogress.scss'
import {useLoader} from "@/hooks/useLoader";

export default function App({Component, pageProps}: AppProps) {
    useLoader()
    return <Component {...pageProps} />;
}
