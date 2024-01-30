'use client';

import { NewEditor } from '@/components/new/new-editor';
import { NewSelectBody } from '@/components/new/new-select-body';
import { NewTitle } from '@/components/new/new-title';
import { NewUploadButton } from '@/components/new/new-uploadButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { Form } from '@/components/ui/form';

const FormSchema = z.object({
    category: z.string(),
    subCategory: z.string(),
    title: z.string().min(5, '제목은 5글자 이상으로 작성해주세요'),
    content: z.string().default('aaa'),
});

const NewPpage = () => {
    const searchParams = useSearchParams();
    const urlCategory = searchParams.get('category');
    const urlSubCategory = searchParams.get('subCategory');

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <NewTitle number={1} text="카테고리를 골라주세요!" />
                <NewSelectBody
                    control={form.control}
                    urlCategory={urlCategory}
                    urlSubCategory={urlSubCategory}
                />
                <NewTitle number={2} text="어떤 내용을 공유하고 싶으신가요?" />
                <NewEditor control={form.control} />
                <NewUploadButton onClick={form.handleSubmit(onSubmit)} />
            </form>
        </Form>
    );
};

export default NewPpage;
