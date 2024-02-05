import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export async function userLikes(): Promise<string[] | null> {
    try {
        const { userId } = auth();
        if (!userId) {
            return null;
        }
        const getProfile = await db.profile.findFirst({
            where: {
                userId,
            },
            select: {
                likes: true,
            },
        });
        if (!getProfile) {
            return null;
        }
        return getProfile.likes;
    } catch (error) {
        console.log(error);
        return null;
    }
}
