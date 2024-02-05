import { userLikes } from '@/action/user-likes';
import { ContentsBody } from '@/components/contents/contents-body';
import React from 'react';

const SubCategoryPage = async ({
    params,
}: {
    params: { subCategory: string };
}) => {
    const { subCategory } = params;
    const likesArray = await userLikes();

    return (
        <ContentsBody
            category="crew"
            subCategory={subCategory}
            likesArray={likesArray}
        />
    );
};

export default SubCategoryPage;
