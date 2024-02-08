'use client';
import { NewBody } from '@/components/new/new-body';
import { useSearchParams } from 'next/navigation';

const NewPpage = () => {
    const searchParams = useSearchParams();

    const urlCategory = searchParams.get('category');
    const urlSubCategory = searchParams.get('subCategory');

    return (
        <NewBody
            url="/api/post"
            method="POST"
            initialCategory={urlCategory}
            initialSubCategory={urlSubCategory}
        />
    );
};

export default NewPpage;
