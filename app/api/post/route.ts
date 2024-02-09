import currentProfile from '@/action/current-profile';
import { categories } from '@/config/data';

import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const profile = await currentProfile();
        if (!profile) {
            return new NextResponse('Unauthorized User', { status: 401 });
        }
        const body = await req.json();
        const {
            category,
            subCategory,
            title,
            content,
            city,
            gu,
            place,
            lat,
            lng,
        } = body;

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
                city,
                gu,
                place,
                lat,
                lng,
            },
        });

        return NextResponse.json(createdPost.id);
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}
