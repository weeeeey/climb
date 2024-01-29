import { Control } from 'react-hook-form';
import { FormField } from '@/components/ui/form';

import { NewSelect } from './new-select';

interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
}

interface NewSelectProps {
    urlCategory: string | null;
    urlSubCategory: string | null;
    control: Control<MyFiledValues>;
}

const categories = ['crew', 'market', 'community', 'review'];
const subCategories = {
    crew: ['oneTimeMeeting', 'recruit', 'introduce'],
    market: [],
    community: ['tip', 'information', 'humor', 'lost'],
    review: ['spot', 'equipment'],
};

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
