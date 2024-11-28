import {useEffect} from 'react'

import {useRouter} from 'next/router'
import NProgress from 'nprogress'

export const useLoader = () => {
    const router = useRouter()

    useEffect(() => {
        // лоадер не срабатывает, если только query-параметры изменились
        const startLoading = (url: string) => {
            console.log(url, router.pathname)
            const isQueryChange = url.split('?')[0] === router.pathname;
            if (!isQueryChange) {
                NProgress.start();
            }
        };
        const endLoading = () => NProgress.done()

        router.events.on('routeChangeStart', startLoading)
        router.events.on('routeChangeComplete', endLoading)
        router.events.on('routeChangeError', endLoading)

        return () => {
            router.events.off('routeChangeStart', startLoading)
            router.events.off('routeChangeComplete', endLoading)
            router.events.off('routeChangeError', endLoading)
        }
    }, [router])
}