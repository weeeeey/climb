'use client';
import { subCategories, subCategoryKor } from '@/config/data';
import { CategoryType } from '../../new/new-types';
import { cn } from '@/lib/utils';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { boardTitleFont, navFont } from '@/font.config';
import { ChevronDownIcon } from 'lucide-react';

interface NavMobileItemProps {
    selecteCategory: 'Crew' | 'Community' | 'Review' | 'Market';
    handleClick: (cate: string, sub: string) => void;
}

export const NavMobileItem = ({
    selecteCategory,
    handleClick,
}: NavMobileItemProps) => {
    return (
        <Accordion type="multiple" className="w-full  ">
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className={cn(
                        'text-xl md:text-2xl outline-none w-full group ',
                        navFont.className
                    )}
                >
                    {selecteCategory}
                    <ChevronDownIcon className="h-6 w-6 hidden group-hover:block   text-muted-foreground transition-transform duration-200 " />
                </AccordionTrigger>
                <AccordionContent className="pl-6 space-y-2 ">
                    {subCategories[
                        selecteCategory.toLocaleLowerCase() as CategoryType
                    ]?.map((sub: string) => (
                        <div
                            key={sub}
                            onClick={() => handleClick(selecteCategory, sub)}
                            className={cn(
                                'text-lg cursor-pointer underline-offset-2 hover:underline',
                                boardTitleFont.className
                            )}
                        >
                            {subCategoryKor[sub as keyof typeof subCategoryKor]}
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
