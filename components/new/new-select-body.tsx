'use client';

import { Control } from 'react-hook-form';
import { FormField } from '@/components/ui/form';

import { NewCategorySelect } from './new-category-select';
import { MyFiledValues } from './new-types';

interface NewSelectProps {
    control: Control<MyFiledValues>;
}

export const NewSelectBody = ({ control }: NewSelectProps) => {
    return (
        <div className="w-full md:w-1/2  pb-20 space-y-12 md:gap-y-0">
            <FormField
                control={control}
                name="category"
                render={({ field }) => (
                    <NewCategorySelect field={field} control={control} />
                )}
            ></FormField>
        </div>
    );
};
