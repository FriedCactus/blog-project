import {Flex, FlexProps} from "../Flex/Flex";

type Props = Omit<FlexProps, 'direction'>;

export const VStack = (props: Props) => {
    return (
        <Flex direction="column" {...props}>
            {children}
        </Flex>
    );
};