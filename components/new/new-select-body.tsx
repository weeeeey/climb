import { Control } from 'react-hook-form';
import { FormField } from '@/components/ui/form';

import { NewSelect } from './new-select';
import { MyFiledValues, categories, subCategories } from './new-types';

interface NewSelectProps {
    urlCategory: string | null;
    urlSubCategory: string | null;
    control: Control<MyFiledValues>;
}

export const NewSelectBody = ({
    urlCategory,
    urlSubCategory,
    control,
}: NewSelectProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 pb-20 gap-y-10 md:gap-y-0">
            <FormField
                control={control}
                name="category"
                render={({ field }) => (
                    <NewSelect
                        name="cate"
                        field={field}
                        contents={categories}
                    />
                )}
            ></FormField>
            <FormField
                control={control}
                name="subCategory"
                render={({ field }) => (
                    <NewSelect
                        name="sub"
                        field={field}
                        contents={subCategories}
                    />
                )}
            ></FormField>
        </div>
    );
};
