import React from 'react';

const SubCategoryPage = ({ params }: { params: { subCategory: string } }) => {
    const { subCategory } = params;
    return <div>{subCategory}</div>;
};

export default SubCategoryPage;
