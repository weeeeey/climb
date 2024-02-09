import { Post, SubCategory } from '@prisma/client';

export interface SafePost extends Omit<Post, 'city' | 'gu'> {
    profile: {
        name: string;
    };
    _count: {
        comments: number;
    };
    city: string | undefined;
    gu: string | undefined;
}

export interface SafeHotSubCategory extends SubCategory {
    posts: SafePost[];
}
