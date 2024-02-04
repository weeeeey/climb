import { hotTitleFont } from '@/font.config';
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

interface HotMainProps {
    subCategory: string;
    category: string;
    posts: SafePost[];
}

export const HotMain = ({ subCategory, category, posts }: HotMainProps) => {
    return (
        <Carousel className="w-full ">
            <div
                className={cn('text-xl font-extrabold', hotTitleFont.className)}
            >
                😃 <span className="text-red-500">Hot</span>{' '}
                <Link href={`/${category}/${subCategory}`}>{category}</Link>
            </div>
            <CarouselContent>
                {posts.map((post: SafePost) => (
                    <CarouselItem
                        key={post.id}
                        className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <HotCard post={post} subCategory={subCategory} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-5 sm:ml-0" />
            <CarouselNext className="mr-5 sm:mr-0 " />
        </Carousel>
    );
};
