import { locationJSON } from '@/config/data';
import { ControllerRenderProps } from 'react-hook-form';

export interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
    city?: string;
    gu?: string;
    place?: string;
}

export interface EditorProvideProps {
    field: ControllerRenderProps<MyFiledValues, 'content'>;
}

export type CategoryType = 'crew' | 'market' | 'community' | 'review';

export type CityType = keyof typeof locationJSON;
