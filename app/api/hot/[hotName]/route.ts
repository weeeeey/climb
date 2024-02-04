import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { hotName: string } }
) {
    try {
        const { hotName } = params;

        // if (!['recruit', 'spot'].includes(hotName)) {
        //     return new NextResponse('invalid date', { status: 400 });
        // }

        const res = await db.subCategory.findFirst({
            where: {
                name: hotName,
            },
            include: {
                posts: {
                    orderBy: [
                        {
                            like: 'desc',
                        },
                        {
                            viewed: 'desc',
                        },
                    ],

                    take: 10,
                    select: {
                        city: true,
                        gu: true,
                        id: true,
                        createdAt: true,
                        title: true,
                        viewed: true,
                        like: true,
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
        return new NextResponse('internal error', { status: 500 });
    }
}
