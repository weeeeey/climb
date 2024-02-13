'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    navSubCategory,
    navCategory,
    navDummy,
    subCategoryKor,
} from '@/config/data';
import { boardTitleFont, navFont } from '@/font.config';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function NavMain() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleClick = (sub: string) => {
        const cate = Object.entries(navDummy).find(([_, values]) =>
            values.includes(sub)
        );
        const subEn = Object.entries(subCategoryKor).find(
            ([_, value]) => value === sub
        );

        if (cate && subEn) {
            setIsOpen(false);
            router.push(`/${cate[0]}/${subEn[0]}`);
        }
    };
    return (
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger
                className={cn(
                    'flex justify-center items-center text-2xl outline-none',
                    navFont.className
                )}
            >
                {navCategory.map((c) => (
                    <div key={c} className=" group cursor-pointer px-3 ">
                        {c}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-400"></span>
                    </div>
                ))}
            </SheetTrigger>

            <SheetContent side="top" className=" outline-none   ">
                <div className="flex  justify-center items-start gap-4  space-x-12 ">
                    {navSubCategory.map((items, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'flex flex-col ',
                                boardTitleFont.className
                            )}
                        >
                            {items.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => handleClick(item)}
                                    className="cursor-pointer group inline-block"
                                >
                                    {item}
                                    <span className="group-hover:max-w-full block max-w-0 transition-all duration-300 h-0.5 bg-red-300 "></span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
