import {RefObject, useEffect} from "react";

export const useIntersection = (
    ref: RefObject<HTMLElement | null>,
    callback?: () => void,
) => {
    useEffect(() => {
        const node = ref.current;
        if (!node || !callback) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((item) => {
                if (item.isIntersecting) {
                    callback();
                }
            });
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        });

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [callback, ref]);
};