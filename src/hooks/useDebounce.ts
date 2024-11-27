import {useCallback} from "react";

type Arg = any
type Callback = (...args: Arg[]) => void

export const useDebounce = (callback: Callback, ms: number) => {
    return useCallback((...args: Arg[]) => {
        const handler = setTimeout(() => {
            callback(...args);
        }, ms);

        return () => {
            clearTimeout(handler);
        };
    }, [callback, ms]);
};
