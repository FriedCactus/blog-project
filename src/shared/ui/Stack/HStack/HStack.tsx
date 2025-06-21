import {Flex, FlexProps} from "../Flex/Flex";
import {PropsWithChildren} from "react";

type Props = Omit<FlexProps, 'direction'>;

export const HStack = ({children, ...otherProps}: PropsWithChildren<Props>) => {
    return (
        <Flex direction="row" {...otherProps}>
            {children}
        </Flex>
    );
};