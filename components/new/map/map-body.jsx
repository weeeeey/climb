'use client';

import { useEffect, useState } from 'react';
import { MapForm } from './map-form';
import { MapMain } from './map-main';
import { Loading } from '@/components/loading';

export default function MapBody() {
    const [initialLocation, setInitialLocation] = useState();
    const [inputValue, setInputValue] = useState('');
    const [resultList, setResultList] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();

    useEffect(() => {
        if (!map) return;
    }, [map]);
    useEffect(() => {
        console.log(selectedInfo);
    }, [selectedInfo]);

    useEffect(() => {
        if ('geolocation' in navigator) {
            function sucessGet(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                setInitialLocation({
                    content: '현재위치',
                    position: {
                        lat: latitude,
                        lng: longitude,
                    },
                });
                setMarkers([
                    {
                        content: '현재위치',
                        position: {
                            lat: latitude,
                            lng: longitude,
                        },
                    },
                ]);
            }
            function denyGet() {
                setInitialLocation({
                    position: {
                        lat: 33.450701,
                        lng: 126.570667,
                    },
                });
            }
            navigator.geolocation.getCurrentPosition(sucessGet, denyGet);
        } else {
            console.log('Geolocation을 지원하지 않습니다.');
            denyGet();
        }
    }, []);

    const onChange = (v) => {
        setInputValue(v.currentTarget.value);
    };
    const handleSelectedMarker = (clickedMarker) => {
        setSelectedInfo(clickedMarker);
    };
    const onClickList = (clickMarker) => {
        markers.forEach((marker) => {
            if (marker.content === clickMarker.place_name) {
                setSelectedInfo(marker);
            }
        });
    };
    const handleSearch = (e) => {
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
    if (!initialLocation) {
        return <Loading />;
    }

    return (
        <div className="flex  space-x-2 ">
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
    );
}
