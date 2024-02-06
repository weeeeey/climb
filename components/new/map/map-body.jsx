'use client';

import { useEffect, useState } from 'react';
import { MapForm } from './map-form';
import { MapMain } from './map-main';

export default function MapBody() {
    const [inputValue, setInputValue] = useState('');
    const [resultList, setResultList] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([
        {
            position: {
                lat: 35.32618509176042,
                lng: 127.63769332300419,
            },
        },
    ]);
    const [map, setMap] = useState();

    useEffect(() => {
        if (!map) return;
    }, [map]);

    const onChange = (v) => {
        setInputValue(v.currentTarget.value);
    };
    const handleSelectedMarker = (clickedMarker) => {
        setSelectedInfo(clickedMarker);
        console.log(clickedMarker);
    };
    const onClickList = (clickMarker) => {
        markers.forEach((marker) => {
            if (marker.content === clickMarker.place_name) {
                setSelectedInfo(marker);
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventdefault;
        if (!inputValue.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return false;
        }

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(inputValue, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                let markers = [];
                setResultList([...result]);
                for (var i = 0; i < result.length; i++) {
                    markers.push({
                        position: {
                            lat: result[i].y,
                            lng: result[i].x,
                        },
                        content: result[i].place_name,
                    });
                    bounds.extend(
                        new kakao.maps.LatLng(result[i].y, result[i].x)
                    );
                }
                setMarkers(markers);

                map.setBounds(bounds);
            } else {
                window.alert('검색된 결과가 없어요ㅜㅜ');
            }
        });
    };

    return (
        <div className="flex  space-x-2 ">
            <MapMain
                markers={markers}
                selectedInfo={selectedInfo}
                info={info}
                handleSelectedMarker={handleSelectedMarker}
                setInfo={setInfo}
                setMap={setMap}
            />

            <MapForm
                handleSubmit={handleSubmit}
                inputValue={inputValue}
                onChange={onChange}
                resultList={resultList}
                onClickList={onClickList}
            />
        </div>
    );
}
