import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const user = await currentUser();
        if (!user) {
            return new NextResponse('invalid user', { status: 400 });
        }
        const name =
            user.username || user.firstName || user.firstName || 'undefint';
        // const profile = await db.profile.create({
        //     data: {
        //         userId: user.id,
        //         name,
        //         imageUrl: user.imageUrl,
        //         // email: user.emailAddresses,
        //     },
        // });
    } catch (error) {
        return new NextResponse('internal error', { status: 500 });
    }
}
