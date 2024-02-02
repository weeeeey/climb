'use client';
import React, { useEffect, useState } from 'react';
import { CityType, MyFiledValues, locationJSON } from '../new-types';

import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ControllerRenderProps } from 'react-hook-form';

interface LocationProps {
    field: ControllerRenderProps<MyFiledValues, 'city'>;
    onCityChange: (city: CityType) => void;
}

export const LocationCity = ({ field, onCityChange }: LocationProps) => {
    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        const location = Object.keys(locationJSON);
        setCities(location);
    }, []);

    const handleChange = (value: CityType) => {
        field.onChange(value);
        onCityChange(value);
    };
    return (
        <FormItem>
            <FormLabel>도시</FormLabel>
            <Select onValueChange={handleChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="어느 도시에서 모집하시나요?" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {cities.map((city, idx) => (
                        <SelectItem key={idx} value={city}>
                            {city}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FormItem>
    );
};
