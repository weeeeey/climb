import currentProfile from '@/action/current-profile';
import { ErrorPage } from '@/components/error';
import { NewBody } from '@/components/new/new-body';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const ModifyPage = async ({ params }: { params: { postId: string } }) => {
    const curProfile = await currentProfile();

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
    if (!curProfile?.id || curProfile.id !== post.profileId) {
        return (
            <div className="flex flex-col justify-center items-center font-bold ">
                <div className="text-9xl">401</div>
                <div className="text-3xl">권한이 없는 사용자입니다.</div>
            </div>
        );
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