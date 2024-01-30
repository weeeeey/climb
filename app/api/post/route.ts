import currentProfile from '@/action/current-profile';
import {
    CategoryType,
    categories,
    subCategories,
} from '@/components/new/new-types';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const body = await req.json();
        const { subCategory } = body;
        if (!subCategory) {
            return new NextResponse('invalid subCategoey', { status: 400 });
        }
        const posts = await db.post.findMany({
            where: {
                subCategory,
            },
            orderBy: {
                viewed: 'desc',
            },
            take: 10,
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse('Unauthorized User', { status: 401 });
        }
        const body = await req.json();
        const { category, subCategory, title, content } = body;

        if (!categories.includes(category)) {
            return new NextResponse('invalid date', { status: 400 });
        }
        if (
            category.legnth === 0 ||
            subCategory.legnth === 0 ||
            title.legnth === 0 ||
            content.legnth === 0
        ) {
            return new NextResponse('Invalid data', { status: 400 });
        }

        const subCate = await db.subCategory.findFirst({
            where: {
                name: subCategory,
            },
        });

        if (!subCate) {
            return new NextResponse('Invalid data', { status: 400 });
        }

        const createdPost = await db.post.create({
            data: {
                profileId: profile.id,
                title,
                content,
                subCategoryId: subCate?.id,
            },
        });

        return NextResponse.json(createdPost);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
