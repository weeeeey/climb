import currentProfile from '@/action/current-profile';
import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function PATCH(
    req: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        if (!postId) {
            return new NextResponse('Invalid postId', { status: 400 });
        }
        const cProfile = await currentProfile();
        if (!cProfile) {
            return new NextResponse('Unauthorized User', { status: 401 });
        }
        const body = await req.json();
        const { isIncrease } = body;
        if (isIncrease) {
            await db.post.update({
                where: {
                    id: postId,
                },
                data: {
                    like: {
                        increment: 1,
                    },
                },
            });
            await db.profile.update({
                where: {
                    id: cProfile.id,
                },
                data: {
                    likes: {
                        push: postId,
                    },
                },
            });
        } else {
            await db.post.update({
                where: {
                    id: postId,
                },
                data: {
                    like: {
                        decrement: 1,
                    },
                },
            });

            const likesIds = cProfile.likes.filter((post) => post !== postId);
            await db.profile.update({
                where: {
                    id: cProfile.id,
                },
                data: {
                    likes: likesIds,
                },
            });
        }
        return new NextResponse('success', { status: 200 });
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}
