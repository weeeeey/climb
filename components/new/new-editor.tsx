import React from 'react';
import { Control } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';

interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
}

interface NewSelectProps {
    control: Control<MyFiledValues>;
}

export const NewEditor = ({ control }: NewSelectProps) => {
    return (
        <div className="space-y-4">
            <FormField
                control={control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>제목</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="제목을 입력해주세요."
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>내용</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="내용을 입력해주세요."
                                className="resize-none h-72 "
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );
};
