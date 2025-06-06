import {User} from "entities/User";

export enum ArticleListView {
    SMALL = "small",
    BIG = 'big'
}

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    CRYPTO = "CRYPTO",
}

export enum ArticleBlockType {
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    CODE = 'CODE'
}

interface ArticleGeneralBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleGeneralBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleGeneralBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleGeneralBlock {
    type: ArticleBlockType.IMAGE;
    title?: string;
    src: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    id: string;
    userId: string;
    title: string;
    subtitle?: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
    user: User;
}