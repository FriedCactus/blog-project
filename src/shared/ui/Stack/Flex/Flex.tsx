import styles from './Flex.module.css';
import {PropsWithChildren} from "react";
import {classNames} from "shared/lib/classNames";

type Direction = 'row' | 'column';

type Justify = 'start' | 'center' | 'end' | 'between';

type Align = 'start' | 'center' | 'end';

type Gap = 's' | 'm' | 'l' | 'xl';

const directionClasses: Record<Direction, string> = {
    row: styles.row,
    column: styles.column
};

const JustifyClasses: Record<Justify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const AlignClasses: Record<Align, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const GapClasses: Record<Gap, string> = {
    s: styles.sGap,
    m: styles.mGap,
    l: styles.lGap,
    xl: styles.xlGap,
};

export interface FlexProps {
    className?: string;
    direction?: Direction;
    align?: Align;
    justify?: Justify;
    gap?: Gap;
}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
    const {
        direction = 'row',
        justify = 'start',
        align = 'start',
        gap,
        className,
        children
    } = props;

    const mods = [
        directionClasses[direction],
        JustifyClasses[justify],
        AlignClasses[align],
        gap && GapClasses[gap],
        className
    ];

    return (
        <div className={classNames(styles.Flex, {}, mods)}>
            {children}
        </div>
    );
};