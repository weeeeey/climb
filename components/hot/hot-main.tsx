import { boardTitleFont, hotTitleFont } from '@/font.config';
import { HotCard } from './hot-card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SafePost } from './hot-types';
import { Flame } from 'lucide-react';
import { hotTitle } from '@/config/data';

interface HotMainProps {
    subCategory: string;
    category: string;
    posts: SafePost[];
    likeArray: string[] | null;
}

export const HotMain = ({
    subCategory,
    category,
    posts,
    likeArray,
}: HotMainProps) => {
    return (
        <Carousel className="w-full">
            <div
                className={cn(
                    'text-xl flex justify-start items-center',
                    hotTitleFont.className
                )}
            >
                <Flame className="w-6 h-6 fill-red-500 text-red-500 " />

                <Link href={`/${category}/${subCategory}`}>
                    <span className="text-yellow-400">Hot</span>{' '}
                    <span className={boardTitleFont.className}>
                        {hotTitle[subCategory as keyof typeof hotTitle]}
                    </span>
                </Link>
            </div>

            <CarouselContent className="overflow-x-auto overflow-y-hidden">
                {posts.map((post: SafePost) => (
                    <CarouselItem
                        key={post.id}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <HotCard
                            post={post}
                            subCategory={subCategory}
                            likeArray={likeArray}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="ml-2" />
            <CarouselNext className="mr-2 " />
        </Carousel>
    );
};
