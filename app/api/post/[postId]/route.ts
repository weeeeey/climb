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

        if (!postId) {
            return new NextResponse('invalid postId', { status: 400 });
        }
        const post = await db.post.delete({
            where: {
                id: postId,
            },
        });

        return NextResponse.json(post);
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}