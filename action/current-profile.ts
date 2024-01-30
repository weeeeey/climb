import { auth, redirectToSignIn, currentUser } from '@clerk/nextjs';
import { db } from '../lib/db';
import { Profile } from '@prisma/client';

const currentProfile = async (): Promise<Profile | undefined> => {
    try {
        const { userId } = auth();
        if (!userId) {
            return redirectToSignIn();
        }
        let currentProfile = await db.profile.findUnique({
            where: {
                userId,
            },
        });
        if (!currentProfile) {
            const user = await currentUser();
            if (!user) {
                return redirectToSignIn();
            }
            const name =
                user.username || `${user.lastName}${user.firstName}` || '무명';
            currentProfile = await db.profile.create({
                data: {
                    userId: userId,
                    name,
                    imageUrl: user.imageUrl,
                    email: user.emailAddresses[0].emailAddress,
                },
            });
        }
        return currentProfile;
    } catch (error) {
        console.log(error);
    }
};

export default currentProfile;
