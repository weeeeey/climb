'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const Billboard = () => {
    return (
        <div className="w-full h-60  sm:px-20 lg:px-40 my-5 flex justify-center items-center ">
            <Carousel
                opts={{
                    loop: true,
                    duration: 50,
                }}
                plugins={[Autoplay()]}
                className=" w-full h-full"
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="w-full h-60  bg-red-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-orange-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-yellow-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-green-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-blue-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-indigo-400 rounded-3xl" />
                    </CarouselItem>
                    <CarouselItem>
                        <div className="w-full h-60  bg-purple-400 rounded-3xl" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
