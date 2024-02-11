import { locationJSON, subCategories } from '@/config/data';
import { ControllerRenderProps } from 'react-hook-form';

export interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
    city?: string;
    gu?: string;
    location?: {
        place?: string;
        lat?: number;
        lng?: number;
    };
}

export interface EditorProvideProps {
    field: ControllerRenderProps<MyFiledValues, 'content'>;
}

export type CategoryType = keyof typeof subCategories;

export type CityType = keyof typeof locationJSON;
