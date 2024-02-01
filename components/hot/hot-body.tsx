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

interface HotBodyProps {
    title: string;
    text: string;
    url: string;
    contents?: any;
    createAt?: Date;
    deadLineAt?: Date;
}

export const HotBody = ({
    title,
    text,
    url,

    contents,
    createAt,
    deadLineAt,
}: HotBodyProps) => {
    const arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 9];

    return (
        <Carousel className="w-full ">
            <div
                className={cn('text-xl font-extrabold', hotTitleFont.className)}
            >
                😃 <span className="text-red-500">Hot</span>{' '}
                <Link href={`/${url}`}>{title}</Link>
            </div>
            <CarouselContent>
                {arr.map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <HotCard item={index + 1} text={text} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-5 sm:ml-0" />
            <CarouselNext className="mr-5 sm:mr-0 " />
        </Carousel>
    );
};
