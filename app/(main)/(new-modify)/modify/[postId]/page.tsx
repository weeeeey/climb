import { ErrorPage } from '@/components/error';
import { NewBody } from '@/components/new/new-body';
import { db } from '@/lib/db';
import React from 'react';

const ModifyPage = async ({ params }: { params: { postId: string } }) => {
    const { postId } = params;
    const post = await db.post.findFirst({
        where: {
            id: postId,
        },
        include: {
            subCategory: {
                select: {
                    name: true,
                    category: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });
    if (!post) {
        return <ErrorPage />;
    }

    return (
        <NewBody
            url={`/api/post/${postId}`}
            method="PUT"
            athuorId={post.profileId}
            initialCity={post.city}
            initialGu={post.gu}
            initialContent={post.content}
            initialPlace={post.place}
            initialSubCategory={post.subCategory.name}
            initialCategory={post.subCategory.category.name.toLowerCase()}
            initialTitle={post.title}
        />
    );
};

export default ModifyPage;
