'use client';
import { FormField } from '@/components/ui/form';
import React, { useState } from 'react';
import { Control } from 'react-hook-form';
import { CityType, MyFiledValues } from '../new-types';
import { LocationCity } from './location-city';
import { LocationGu } from './location-gu';

interface LocationBodyProps {
    control: Control<MyFiledValues>;
}

export const LocationBody = ({ control }: LocationBodyProps) => {
    const [selectedCity, setSelectedCity] = useState<CityType>('시/도 선택');
    const onCityChange = (city: CityType) => {
        setSelectedCity(city);
    };
    return (
        <>
            <FormField
                control={control}
                name="city"
                render={({ field }) => (
                    <LocationCity field={field} onCityChange={onCityChange} />
                )}
            />
            {selectedCity !== '시/도 선택' && (
                <FormField
                    control={control}
                    name="gu"
                    render={({ field }) => (
                        <LocationGu field={field} selectedCity={selectedCity} />
                    )}
                />
            )}
        </>
    );
};
