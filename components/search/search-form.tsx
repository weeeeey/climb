'use client';
import { Search } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

import qs from 'query-string';

interface FormProps {
    title: string;
}

export const SearchForm = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { register, handleSubmit } = useForm<FormProps>();
    const onSubmit = (data: FormProps) => {
        const { title } = data;
        router.push(`${pathname}?title=${title}`);
    };
    const onError = (error: FieldErrors<FieldValues>) => {
        console.log(error);
    };

    return (
        <form className="relative" onSubmit={handleSubmit(onSubmit, onError)}>
            <input
                {...register('title', {
                    required: '입력해주세요',
                    minLength: { message: '최소 2글자 이상', value: 2 },
                    maxLength: { message: '최대 20글자 이하', value: 20 },
                })}
                placeholder="검색어를 입력해주세요"
                className="w-full border border-slate-400 rounded-xl pl-2 pr-8 py-1"
                type="text"
            />
            <button type="submit" className="absolute inset-y-0 right-0 px-2">
                <Search className="w-4 h-4" />
            </button>
        </form>
    );
};
