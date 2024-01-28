import { currentProfile } from '@/action/current-profile';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

interface IParams {
    params: {
        postId: string;
    };
}

export async function POST(req: Request, { params }: IParams) {
    try {
        const authProfile = await currentProfile();
        if (!authProfile) {
            return new NextResponse('Unathourized User', { status: 401 });
        }

        const { postId } = params;
        const likes = authProfile.likes.length === 0 ? [] : authProfile.likes;
        likes.push(postId);

        const profile = await db.profile.update({
            where: {
                id: authProfile.id,
            },
            data: {
                likes,
            },
        });

        return NextResponse.json(profile);
    } catch (error) {
        return new NextResponse('internal_error', { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: IParams) {
    try {
        const authProfile = await currentProfile();
        if (!authProfile) {
            return new NextResponse('Unathourized User', { status: 401 });
        }
        const { postId } = params;
        const likes = authProfile.likes.filter(
            (likeId: string) => likeId !== postId
        );
        const profile = await db.profile.update({
            where: {
                id: authProfile.id,
            },
            data: {
                likes,
            },
        });

        return NextResponse.json(profile);
    } catch (error) {
        return new NextResponse('internal_error', { status: 500 });
    }
}
