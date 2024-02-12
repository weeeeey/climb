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
import { useEffect, useState } from 'react';

export function NavMain() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleClick = (sub: string) => {
        const cate = Object.entries(navDummy).find(([key, values]) =>
            values.includes(sub)
        );
        const subEn = Object.entries(subCategoryKor).find(
            ([key, value]) => value === sub
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
                    <div key={c} className="cursor-pointer px-3 ">
                        {c}
                    </div>
                ))}
            </SheetTrigger>
            <SheetContent side="top" className="top-16 outline-none ">
                <div className="flex justify-center items-start gap-4  space-x-12 ">
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
                                    className="cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}
