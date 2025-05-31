type ConditionalCls = Record<string, string | boolean | undefined>;

// Заменить на либу classNames
export const classNames = (cls: string, conditionalCls: ConditionalCls = {}, additional: (string | undefined)[] = []): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(conditionalCls)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
};