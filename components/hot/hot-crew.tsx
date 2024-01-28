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

interface HotProps {
    title: string;
    text: string;

    createAt: Date;
    deadLineAt?: Date;
}

export const HotCrew = () => {
    const arr = [1, 2, 3, 3, 4, 4, 5, 6, 7, 9];

    return (
        <Carousel className="w-full ">
            <div className={cn('text-xl', hotTitleFont.className)}>
                😃 <span className="text-red-500">Hot</span> Crew
            </div>
            <CarouselContent>
                {arr.map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <HotCard item={index + 1} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-5 sm:ml-0" />
            <CarouselNext className="mr-5 sm:mr-0 " />
        </Carousel>
    );
};
