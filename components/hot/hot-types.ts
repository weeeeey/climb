import { SubCategory } from '@prisma/client';

export type SafePost = {
    id: string;
    title: string;
    createdAt: Date;
    viewed: number;
    like: number;
    profile: {
        name: string;
    };

    city: string | undefined;
    gu: string | undefined;
    _count: {
        comments: number;
    };
};

export interface SafeHotSubCategory extends SubCategory {
    posts: SafePost[];
}
