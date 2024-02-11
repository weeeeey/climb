'use client';
import React, { useEffect, useState } from 'react';
import { CityType, MyFiledValues } from '../new-types';

import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ControllerRenderProps } from 'react-hook-form';
import { locationJSON } from '@/config/data';

interface LocationProps {
    field: ControllerRenderProps<MyFiledValues, 'gu'>;
    selectedCity: CityType;
}

export const LocationGu = ({ field, selectedCity }: LocationProps) => {
    const [gues, setGues] = useState<string[]>();
    useEffect(() => {
        const location = locationJSON[selectedCity];
        setGues(location);
    }, [selectedCity]);

    return (
        <>
            {gues && (
                <FormItem className="w-1/2">
                    <FormLabel>지역</FormLabel>
                    <Select onValueChange={field.onChange}>
                        <FormControl>
                            <SelectTrigger defaultValue={field.value}>
                                <SelectValue placeholder="어느 지역에서 모집하시나요?" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {gues.map((gu, idx) => (
                                <SelectItem key={idx} value={gu}>
                                    {gu}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        </>
    );
};
