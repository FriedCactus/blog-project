import {DynamicModuleLoader} from "shared/lib/components";
import {detailedArticleReducer} from "../../model/slice/detailedArticleSlice";
import {PropsWithChildren} from "react";
import {VStack} from "shared/ui/Stack";

const reducers = {
    detailedArticle: detailedArticleReducer
};


export const ArticleWrapper = ({children}: PropsWithChildren) => (
    <DynamicModuleLoader reducers={reducers}>
        <VStack wMax hMax gap="xl">
            {children}
        </VStack>
    </DynamicModuleLoader>
);