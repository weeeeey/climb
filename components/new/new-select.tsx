'use client';

import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ControllerRenderProps } from 'react-hook-form';

interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
}

interface NewSelectProps {
    contents: string[] | object;
    initialCate?: string;
    initialSub?: string;
    name: 'cate' | 'sub';
    field:
        | ControllerRenderProps<MyFiledValues, 'category'>
        | ControllerRenderProps<MyFiledValues, 'subCategory'>;
}

export const NewSelect = ({
    contents,
    initialCate,
    initialSub,
    field,
    name,
}: NewSelectProps) => {
    return (
        <FormItem>
            <FormLabel>{name === 'cate' ? '카테고리' : '게시판'}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue
                            placeholder={
                                name === 'cate'
                                    ? '어느 카테고리에 올릴까요?'
                                    : '어느 게시판에 올릴까요?'
                            }
                        />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
            </Select>
        </FormItem>
    );
};
