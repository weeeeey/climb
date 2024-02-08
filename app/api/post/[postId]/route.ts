import currentProfile from '@/action/current-profile';
import { categories } from '@/config/data';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;

        if (!postId) {
            return new NextResponse('invalid postId', { status: 400 });
        }
        const post = await db.post.update({
            where: {
                id: postId,
            },
            data: {
                viewed: {
                    increment: 1,
                },
            },
            include: {
                profile: {
                    select: {
                        name: true,
                        id: true,
                    },
                },
                comments: {
                    include: {
                        profile: {
                            select: {
                                name: true,
                                imageUrl: true,
                                createdAt: true,
                            },
                        },
                        replyComments: {
                            include: {
                                profile: {
                                    select: {
                                        name: true,
                                        imageUrl: true,
                                        createdAt: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!post) {
            return new NextResponse('Not Found', { status: 404 });
        }
        return NextResponse.json(post);
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}

/**
 * 
 * @param req 
조회수 post 업데이트 
 */
export async function PATCH(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        // const body = await req.json();
        // const { title, content, location, marketPrice = 0 } = body;

        if (!postId) {
            return new NextResponse('invalid postId', { status: 400 });
        }

        const post = await db.post.update({
            where: {
                id: postId,
            },
            data: {
                viewed: {
                    increment: 1,
                },
            },
        });

        return NextResponse.json(post);
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        const body = await req.json();
        const { athuorId } = body;
        const curProfile = await currentProfile();
        if (!curProfile || curProfile.id !== athuorId) {
            return new NextResponse('Unauthorized User', { status: 400 });
        }
        if (!postId) {
            return new NextResponse('invalid postId', { status: 400 });
        }
        const post = await db.post.delete({
            where: {
                id: postId,
            },
            select: {
                subCategory: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return NextResponse.json(post.subCategory.name, { status: 200 });
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        const body = await req.json();
        const {
            athuorId,
            category,
            subCategory,
            title,
            content,
            city,
            gu,
            place,
        } = body;
        const curProfile = await currentProfile();
        if (!curProfile || curProfile.id !== athuorId) {
            return new NextResponse('Unathuorized User', { status: 401 });
        }
        if (!postId) {
            return new NextResponse('Invalid data', { status: 400 });
        }
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

        const res = await db.post.update({
            where: {
                id: postId,
            },
            data: {
                subCategoryId: subCate.id,
                title,
                content,
                city,
                gu,
                place,
            },
        });

        return NextResponse.json(res.id, { status: 200 });
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}
