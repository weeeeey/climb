'use client';
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
import { subCategories } from '@/config/data';
import { TypeMapBody } from './map/type-map-body';
import { useEffect, useState } from 'react';

interface NewSelectProps {
    control: Control<MyFiledValues>;
    field: ControllerRenderProps<MyFiledValues, 'subCategory'>;
    selectedCate: CategoryType;
}

export const NewSubSelect = ({
    field,
    selectedCate,
    control,
}: NewSelectProps) => {
    const [subCate, setSubCate] = useState<string[]>();
    useEffect(() => {
        if (selectedCate) {
            setSubCate(subCategories[selectedCate as CategoryType]);
        }
    }, [selectedCate]);

    return (
        <div className="space-y-12  sm:w-1/2">
            <FormItem>
                <FormLabel> 게시판</FormLabel>
                <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="어느 게시판에 올릴까요?" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {subCate?.map((c, idx) => (
                            <SelectItem key={idx} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>

            {field.value === 'spot' && (
                <FormField
                    control={control}
                    name="location"
                    render={({ field }) => (
                        <TypeMapBody
                            title="[다녀오신 지점을 알려주세요]"
                            field={field}
                        />
                    )}
                />
            )}
        </div>
    );
};
