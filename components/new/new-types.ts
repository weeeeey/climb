import { ControllerRenderProps } from 'react-hook-form';

export interface MyFiledValues {
    category: string;
    subCategory: string;
    title: string;
    content: string;
}

export const categories = ['crew', 'market', 'community', 'review'];
export const subCategories = {
    crew: ['oneTimeMeeting', 'recruit', 'introduce'],
    market: [],
    community: ['tip', 'information', 'humor', 'lost'],
    review: ['spot', 'equipment'],
};

export interface EditorProvideProps {
    field: ControllerRenderProps<MyFiledValues, 'content'>;
}
