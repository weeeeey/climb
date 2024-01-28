import { SubCategoryName } from '@prisma/client';
import React from 'react';

interface PostPageProps {
    subCategory?: SubCategoryName;
}

const PostPage = ({ subCategory }: PostPageProps) => {
    return <div>PostPage</div>;
};

export default PostPage;
