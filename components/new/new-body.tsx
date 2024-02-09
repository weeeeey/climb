'use client';

import { NewEditor } from '@/components/new/new-editor';
import { NewSelectBody } from '@/components/new/new-select-body';
import { NewTitle } from '@/components/new/new-title';
import { NewUploadButton } from '@/components/new/new-uploadButton';
import { useRouter, useSearchParams } from 'next/navigation';

import axios from 'axios';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { MyFiledValues } from '@/components/new/new-types';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Loading } from '@/components/loading';

import React from 'react';
import { Form } from '../ui/form';

interface NewBodyProps {
    url: string;
    method: string;
    athuorId?: string;
    initialCategory?: string | null;
    initialSubCategory?: string | null;
    initialTitle?: string | null;
    initialContent?: string | null;
    initialCity?: string | null;
    initialGu?: string | null;
    initialPlace?: string | null;
    initialLat?: number | null;
    initialLng?: number | null;
}

const FormSchema = z.object({
    category: z.string().min(1),
    subCategory: z.string(),
    title: z.string().min(2, '제목은 2글자 이상으로 작성해주세요'),
    content: z.string().min(1),
    city: z.string().optional(),
    gu: z.string().optional(),
    location: z
        .object({
            place: z.string().optional(),
            lat: z.number().optional(),
            lng: z.number().optional(),
        })
        .optional(),
});

export const NewBody = ({
    url,
    method,
    athuorId,
    initialCategory,
    initialCity,
    initialContent,
    initialGu,
    initialPlace,
    initialSubCategory,
    initialTitle,
    initialLat,
    initialLng,
}: NewBodyProps) => {
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),

        defaultValues: {
            subCategory: initialSubCategory || undefined,
            category: initialCategory || undefined,
            city: initialCity || undefined,
            content: initialContent || undefined,
            gu: initialGu || undefined,
            title: initialTitle || undefined,
            location: {
                lat: initialLat || undefined,
                lng: initialLng || undefined,
                place: initialPlace || undefined,
            },
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            setisLoading(true);
            const {
                category,
                content,
                subCategory,
                title,
                city,
                gu,
                location,
            } = data;

            const res = await axios({
                url,
                method,
                data: {
                    category,
                    title,
                    content,
                    subCategory,
                    city,
                    gu,
                    place: location?.place,
                    lat: location?.lat,
                    lng: location?.lng,
                    athuorId,
                },
            });
            if (res.status === 200) {
                router.refresh();
                toast.success('Success');
                router.push(`/post/${res.data}`);
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
