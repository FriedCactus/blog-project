import {LoadingSpinner} from "shared/ui/LoadingSpinner";
import {VStack} from "shared/ui/Stack";

export const PageLoader = () => {
    return (
        <VStack align="center" justify="center" hMax>
            <LoadingSpinner/>
        </VStack>
    );
};