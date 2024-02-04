import { SubCategory } from '@prisma/client';

export type SafePost = {
    city: string | undefined;
    gu: string | undefined;
    id: string;
    createdAt: string;
    title: string;
    viewed: number;
    like: number;
    _count: {
        comments: number;
    };
};

export interface SafeHotSubCategory extends SubCategory {
    posts: SafePost[];
}
