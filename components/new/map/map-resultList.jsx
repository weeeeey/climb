import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export const MapResultList = ({ resultList }) => {
    return (
        <ScrollArea className="border h-15 ">
            {resultList.map((result) => (
                <div
                    key={result.id}
                    className="border-b px-4 py-2 text-xs space-y-2"
                >
                    <a
                        href={result.place_url}
                        target="_blank"
                        className="font-semibold text-sm"
                    >
                        {result.place_name}
                    </a>
                    <div>
                        <div>{result.road_address_name}</div>
                        <div className="font-thin">
                            <span className="bg-slate-300 rounded-lg px-2 ">
                                지번
                            </span>
                            {result.address_name}
                        </div>
                    </div>
                    <div>{result.phone}</div>
                </div>
            ))}
        </ScrollArea>
    );
};
