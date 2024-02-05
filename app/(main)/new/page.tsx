'use client';

import { NewEditor } from '@/components/new/new-editor';
import { NewSelectBody } from '@/components/new/new-select-body';
import { NewTitle } from '@/components/new/new-title';
import { NewUploadButton } from '@/components/new/new-uploadButton';
import { useRouter, useSearchParams } from 'next/navigation';

import axios from 'axios';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { FieldErrors, useForm } from 'react-hook-form';
import { MyFiledValues } from '@/components/new/new-types';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Loading } from '@/components/loading';

const FormSchema = z.object({
    category: z.string().min(1),
    subCategory: z.string(),
    title: z.string().min(2, '제목은 2글자 이상으로 작성해주세요'),
    content: z.string().min(1),
    city: z.string().optional(),
    gu: z.string().optional(),
});

const NewPpage = () => {
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const urlCategory = searchParams.get('category');
    const urlSubCategory = searchParams.get('subCategory');

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),

        defaultValues: {
            subCategory: urlSubCategory || undefined,
            category: urlCategory || undefined,
        },
    });

    if (isLoading) {
        return <Loading />;
    }
    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setisLoading(true);
            const { category, content, subCategory, title, city, gu } = data;

            const res = await axios.post('/api/post', {
                category,
                title,
                content,
                subCategory,
                city,
                gu,
            });
            if (res.status === 200) {
                router.refresh();
                toast.success('Success');
                router.push(`/post/${res.data.id}`);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setisLoading(false);
        }
    }

    function inValidSubmit(errors: FieldErrors<MyFiledValues>) {
        console.log(errors);
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit, inValidSubmit)}
                className="space-y-10"
            >
                <NewTitle number={1} text="카테고리를 골라주세요!" />
                <NewSelectBody control={form.control} />
                <NewTitle number={2} text="어떤 내용을 공유하고 싶으신가요?" />
                <NewEditor control={form.control} />
                <NewUploadButton onClick={form.handleSubmit(onSubmit)} />
            </form>
        </Form>
    );
};

export default NewPpage;
