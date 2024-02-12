'use client';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React, { RefObject } from 'react';

import { UseFormReturn } from 'react-hook-form';
import { useModalStore } from '@/lib/use-modal';

interface CommentFormProps {
    formRef: RefObject<HTMLTextAreaElement>;
    form: UseFormReturn<{
        comment: string;
    }>;
    isDisable: boolean;
    onSubmit: (data: { comment: string }) => void;
}

export const CommentForm = ({
    formRef,
    form,
    isDisable,
    onSubmit,
}: CommentFormProps) => {
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid md:grid-cols-8 w-full gap-3 md:px-10"
            >
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className="md:col-span-7 md:relative">
                            <FormControl>
                                <Textarea
                                    name={field.name}
                                    onChange={field.onChange}
                                    value={field.value}
                                    ref={formRef}
                                    disabled={isDisable}
                                    placeholder={
                                        isDisable
                                            ? '로그인 해주세요.'
                                            : '댓글은 자신의 얼굴!'
                                    }
                                />
                            </FormControl>
                            <FormMessage className="md:absolute -bottom-8 left-0" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isDisable}
                    className="md:h-full"
                >
                    등록
                </Button>
            </form>
        </Form>
    );
};
