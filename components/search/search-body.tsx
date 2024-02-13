import React from 'react';
import { NewRouterBtn } from '../new/new-routerBtn';
import { SearchForm } from './search-form';

interface SearchBodyProps {
    category: string;
    subCategory: string;
}

export const SearchBody = ({ category, subCategory }: SearchBodyProps) => {
    return (
        <div className="flex justify-between items-center">
            <SearchForm />
            <NewRouterBtn category={category} subCategory={subCategory} />
        </div>
    );
};
