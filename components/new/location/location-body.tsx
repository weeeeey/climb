'use client';
import { FormField } from '@/components/ui/form';
import React, { useState } from 'react';
import { Control } from 'react-hook-form';
import { CityType, MyFiledValues } from '../new-types';
import { LocationCity } from './location-city';
import { LocationGu } from './location-gu';
import { TypeMapBody } from '../map/type-map-body';

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
            <FormField
                control={control}
                name="place"
                render={({ field }) => (
                    <TypeMapBody
                        title="(옵션) 크루의 아지트가 있으실까요?"
                        field={field}
                    />
                )}
            />
        </>
    );
};
