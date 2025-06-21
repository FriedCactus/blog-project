import {Flex, FlexProps} from "../Flex/Flex";
import {PropsWithChildren} from "react";

type Props = Omit<FlexProps, 'direction'>;

export const VStack = ({children, ...otherProps}: PropsWithChildren<Props>) => {
    return (
        <Flex direction="column" {...otherProps}>
            {children}
        </Flex>
    );
};