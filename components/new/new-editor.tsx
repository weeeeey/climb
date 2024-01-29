import React from 'react';
import { Control } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { MyFiledValues } from './new-types';
import { EditorProvider } from '../editor/editor-provider';

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
                                className="px-3 py-5  "
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
                            <EditorProvider field={field} />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    );
};
