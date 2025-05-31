enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    CRYPTO = "CRYPTO",
}

enum ArticalBlockType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    CODE = 'CODE'
}

interface ArticleGeneralBlock {
    id: string;
    type: ArticalBlockType;
}

interface ArticleTextBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

interface ArticleCodeBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.CODE;
    code: string;
}

interface ArticleImageBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.IMAGE;
    title: string;
    src: string;
}

type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    id: string;
    title: string;
    subtitle?: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}