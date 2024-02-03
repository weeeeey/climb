import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { postId, profileId, text } = body;

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
