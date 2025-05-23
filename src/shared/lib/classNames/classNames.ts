type ConditionalCls = Record<string, string | boolean | undefined>;

export const classNames = (cls: string, conditionalCls: ConditionalCls = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(conditionalCls)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
};