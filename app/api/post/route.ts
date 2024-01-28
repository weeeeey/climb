import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const body = await req.json();
        const { subCategory } = body;
        if (!subCategory) {
            return new NextResponse('invalid subCategoey', { status: 400 });
        }
        const posts = await db.post.findMany({
            where: {
                subCategory,
            },
            orderBy: {
                viewed: 'desc',
            },
            take: 10,
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}
