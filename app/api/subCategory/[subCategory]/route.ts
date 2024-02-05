import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { subCategory: string } }
) {
    try {
        const { subCategory } = params;
        const url = new URL(req.url);
        const selectedPage = url.searchParams.get('selectedPage');

        if (
            subCategory.length === 0 ||
            !selectedPage ||
            parseInt(selectedPage) <= 0
        ) {
            return new NextResponse('Invalid data', { status: 400 });
        }

        const res = await db.subCategory.findFirst({
            where: {
                name: subCategory,
            },

            select: {
                _count: {
                    select: {
                        posts: true,
                    },
                },
                posts: {
                    take: 10,
                    skip: 10 * (parseInt(selectedPage) - 1),

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
        return NextResponse.json(res);
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}
