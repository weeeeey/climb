import { subCategoryKor } from '@/config/data';
import { SafePost } from '../hot/hot-types';

export interface ContentsBodyProps {
    posts: SafePost[];
    subCategory: string;
    category: string;
    likesArray: string[] | null;
    _count: PostsCount;
}

type PostsCount = {
    posts: number;
};

export type subCategoryKorType = keyof typeof subCategoryKor;
