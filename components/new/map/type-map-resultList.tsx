import { cn } from '@/lib/utils';
import React from 'react';
import { MakerType } from './type-map-body';

interface MapResultListProps {
    resultList: kakao.maps.services.PlacesSearchResult;
    onClickList: (
        clickMarker: kakao.maps.services.PlacesSearchResultItem
    ) => void;
    selectedInfo: MakerType | undefined;
}

export const TypeMapResultList = ({
    resultList,
    onClickList,
    selectedInfo,
}: MapResultListProps) => {
    return (
        <div
            style={{
                overflowY: 'auto',
                maxHeight: '310px',
            }}
            className="border"
        >
            {resultList.map((result) => (
                <div
                    key={result.id}
                    className={cn(
                        'px-4 py-2 text-xs space-y-2 border-b  cursor-pointer',
                        selectedInfo &&
                            selectedInfo.content === result.place_name &&
                            selectedInfo.position.lat === +result.y &&
                            selectedInfo.position.lng === +result.x &&
                            'border border-red-400'
                    )}
                    onClick={() => onClickList(result)}
                >
                    <a
                        href={result.place_url}
                        target="_blank"
                        className="font-semibold text-sm underline-offset-4 hover:underline"
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
        </div>
    );
};
