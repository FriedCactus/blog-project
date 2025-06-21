type ConditionalCls = Record<string, string | boolean | undefined>;

export const classNames = (
    cls: string,
    conditionalCls: ConditionalCls = {},
    mods: (string | undefined)[] = []
): string => {
    return [
        cls,
        ...mods,
        ...Object.entries(conditionalCls)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
};