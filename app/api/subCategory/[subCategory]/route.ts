import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { subCategory: string } }
) {
    try {
        const { subCategory } = params;
        if (subCategory.length === 0) {
            return new NextResponse('Invalid data', { status: 400 });
        }
        const res = await db.subCategory.findFirst({
            where: {
                name: subCategory,
            },
            select: {
                posts: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    select: {
                        city: true,
                        gu: true,
                        id: true,
                        createdAt: true,
                        title: true,
                        viewed: true,
                        like: true,
                        profile: {
                            select: {
                                name: true,
                            },
                        },
                        _count: {
                            select: {
                                comments: true,
                            },
                        },
                    },
                },
            },
        });

        return NextResponse.json(res?.posts);
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}
