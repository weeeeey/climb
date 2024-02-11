import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        const post = await db.post.findUnique({
            where: {
                id: postId,
            },
            select: {
                comments: {
                    orderBy: {
                        createdAt: 'asc',
                    },
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
        return NextResponse.json(post?.comments);
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}

export async function POST(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const body = await req.json();
        const { postId } = params;
        const { profileId, text } = body;

        if (!postId || !profileId || text.length <= 0) {
            return new NextResponse('invalid data', { status: 400 });
        }

        const newComment = await db.comment.create({
            data: {
                text: text as string,
                profileId,
                postId,
            },
        });

        return NextResponse.json(newComment);
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}
