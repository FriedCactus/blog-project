import {DynamicModuleLoader} from "shared/lib/components";
import {detailedArticleReducer} from "../../model/slice/detailedArticleSlice";
import {PropsWithChildren} from "react";
import styles from './ArticleWrapper.module.css';

const reducers = {
    detailedArticle: detailedArticleReducer
};


export const ArticleWrapper = ({children}: PropsWithChildren) => (
    <DynamicModuleLoader reducers={reducers}>
        <div className={styles.ArticleWrapper}>
            {children}
        </div>
    </DynamicModuleLoader>
);