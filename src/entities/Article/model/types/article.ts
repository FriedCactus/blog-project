export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    CRYPTO = "CRYPTO",
}

export enum ArticalBlockType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    CODE = 'CODE'
}

interface ArticleGeneralBlock {
    id: string;
    type: ArticalBlockType;
}

export interface ArticleTextBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleGeneralBlock {
    type: ArticalBlockType.IMAGE;
    title?: string;
    src: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

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