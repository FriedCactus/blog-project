import {Skeleton} from "shared/ui/Skeleton";
import {Card} from "shared/ui/Card";

export const ArticleItemSmallSkeleton = () => (
    <Card>
        <Skeleton width={200} height={250}/>
    </Card>
);