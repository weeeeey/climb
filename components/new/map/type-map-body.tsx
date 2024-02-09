'use client';
import React, { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { MyFiledValues } from '../new-types';
import { searchLocation } from '@/action/search-location';
import { getCurLocation } from '@/action/get-cur-location';
import { Loading } from '@/components/loading';
import { TypeMapMain } from './type-map-main';
import { TypeMapForm } from './type-map-form';

interface MapBodyProps {
    field: ControllerRenderProps<MyFiledValues, 'location'>;
    title: string;
}

export type MakerType = {
    position: {
        lat: number;
        lng: number;
    };
    content?: string;
};

export const TypeMapBody = ({ field, title }: MapBodyProps) => {
    const [initialLocation, setInitialLocation] = useState<MakerType>();
    const [inputValue, setInputValue] = useState('');
    const [resultList, setResultList] =
        useState<kakao.maps.services.PlacesSearchResult>([]);
    const [selectedInfo, setSelectedInfo] = useState<MakerType>();
    const [info, setInfo] = useState<MakerType | undefined>();
    const [markers, setMarkers] = useState<MakerType[]>([]);
    const [map, setMap] = useState<kakao.maps.Map>();

    useEffect(() => {
        if (!map) return;
        if (field.value) {
            searchLocation({
                inputValue: field.value.place,
                map,
                setMarkers,
                setResultList,
            });
        }
    }, [map]);

    useEffect(() => {
        getCurLocation({
            setInitialLocation,
            setMarkers,
        });
    }, []);

    const onChange = (v: React.FormEvent<HTMLInputElement>) => {
        setInputValue(v.currentTarget.value);
    };
    const handleSelectedMarker = (markerInMap: MakerType) => {
        setSelectedInfo(markerInMap);
        field.onChange({
            place: markerInMap.content,
            lat: markerInMap.position.lat,
            lng: markerInMap.position.lng,
        });
    };
    const onClickList = (
        clickMarker: kakao.maps.services.PlacesSearchResultItem
    ) => {
        markers.forEach((marker) => {
            if (
                marker.content === clickMarker.place_name &&
                marker.position.lat === +clickMarker.y &&
                marker.position.lng === +clickMarker.x
            ) {
                handleSelectedMarker(marker);
            }
        });
    };
    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!inputValue.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return;
        }
        searchLocation({
            inputValue,
            map,
            setMarkers,
            setResultList,
        });

        e.preventDefault();
    };
    if (!initialLocation) {
        return <Loading />;
    }

    return (
        <div className="space-y-2">
            <div>{title}</div>
            <div className="flex space-x-2">
                <TypeMapMain
                    initialLocation={initialLocation}
                    markers={markers}
                    selectedInfo={selectedInfo}
                    info={info}
                    handleSelectedMarker={handleSelectedMarker}
                    setInfo={setInfo}
                    setMap={setMap}
                />

                <TypeMapForm
                    handleSearch={handleSearch}
                    inputValue={inputValue}
                    onChange={onChange}
                    resultList={resultList}
                    onClickList={onClickList}
                    selectedInfo={selectedInfo}
                />
            </div>
        </div>
    );
};
