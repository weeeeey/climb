import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Control, ControllerRenderProps } from 'react-hook-form';
import { CategoryType, MyFiledValues } from './new-types';
import { useEffect, useState } from 'react';
import { NewSubSelect } from './new-sub-select';
import { LocationBody } from './location/location-body';
import { categories } from '@/config/data';

interface NewSelectProps {
    control: Control<MyFiledValues>;
    field: ControllerRenderProps<MyFiledValues, 'category'>;
}

export const NewCategorySelect = ({ field, control }: NewSelectProps) => {
    const [selectedCate, setSelectedCate] = useState<CategoryType>();

    useEffect(() => {
        setSelectedCate(field.value as CategoryType);
    }, [field.value]);

    return (
        <>
            <FormItem>
                <FormLabel>카테고리</FormLabel>
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="어느 카테고리에 올릴까요?" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {categories.map((c, idx) => (
                            <SelectItem key={idx} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
            {selectedCate && selectedCate !== 'market' && (
                <FormField
                    control={control}
                    name="subCategory"
                    render={({ field }) => (
                        <NewSubSelect
                            selectedCate={selectedCate}
                            field={field}
                        />
                    )}
                />
            )}
            {selectedCate && ['crew', 'market'].includes(selectedCate) && (
                <LocationBody control={control} />
            )}
        </>
    );
};
