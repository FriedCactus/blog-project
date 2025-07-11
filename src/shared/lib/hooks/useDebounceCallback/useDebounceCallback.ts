import {useCallback, useRef} from "react";

export const useDebounceCallback = (callback: (...args: unknown[]) => void, delay: number) => {
    const timer = useRef<ReturnType<typeof setTimeout>>(null);

    return useCallback((...args: unknown[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};