'use client';

import { useEffect, useState } from 'react';
import { MapForm } from './map-form';
import { MapMain } from './map-main';
import { Loading } from '@/components/loading';
import { getCurLocation } from '@/action/get-cur-location';
import { searchLocation } from '@/action/search-location';

export default function MapBody({ field, title }) {
    const [initialLocation, setInitialLocation] = useState();
    const [inputValue, setInputValue] = useState('');
    const [resultList, setResultList] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();

    useEffect(() => {
        if (!map) return;
        if (field.value) {
            searchLocation({
                inputValue: field.value,
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

    const onChange = (v) => {
        setInputValue(v.currentTarget.value);
    };
    const handleSelectedMarker = (clickedMarker) => {
        setSelectedInfo(clickedMarker);
        field.onChange(clickedMarker.content);
    };
    const onClickList = (clickMarker) => {
        markers.forEach((marker) => {
            if (
                marker.content === clickMarker.place_name &&
                marker.position.lat === clickMarker.y &&
                marker.position.lng === clickMarker.x
            ) {
                handleSelectedMarker(marker);
            }
        });
    };
    const handleSearch = (e) => {
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
                <MapMain
                    initialLocation={initialLocation}
                    markers={markers}
                    selectedInfo={selectedInfo}
                    info={info}
                    handleSelectedMarker={handleSelectedMarker}
                    setInfo={setInfo}
                    setMap={setMap}
                />

                <MapForm
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
}
