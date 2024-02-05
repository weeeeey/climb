import { subCategoryKor } from '@/config/data';
import { SafePost } from '../hot/hot-types';

export interface ContentsBodyProps {
    posts: SafePost[];
    subCategory: string;
    likesArray: string[] | null;
}

export type subCategoryKorType = keyof typeof subCategoryKor;
