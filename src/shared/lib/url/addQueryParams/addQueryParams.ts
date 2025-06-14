export const getQueryParams = (params: Record<string, string | string[]>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([name, value]) => {
        if (!value.length) {
            searchParams.delete(name);
        } else if (Array.isArray(value)) {
            searchParams.set(name, value.join(','));
        } else {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
};

/**
 * Функция добавления параметров в строку запроса
 * @param params
 */
export const addQueryParams = (params: Record<string, string | string[]>) => {
    window.history.pushState(null, '', getQueryParams(params));
};