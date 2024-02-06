'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { MapForm } from './map-form';

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
            }
        });
    };

    return (
        <div className="flex  space-x-2 ">
            <Map // 로드뷰를 표시할 Container
                center={{
                    lat: 35.32618509176042,
                    lng: 127.63769332300419,
                }}
                style={{
                    width: '50%',
                    height: '350px',
                }}
                level={4}
                onCreate={setMap}
            >
                {markers.map((marker) => (
                    <MapMarker
                        key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                        position={marker.position}
                        onClick={() => handleSelectedMarker(marker)}
                        onMouseOver={() => setInfo(marker)}
                        onMouseOut={() => setInfo('')}
                        image={
                            marker === selectedInfo && {
                                src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
                                size: {
                                    width: 64,
                                    height: 69,
                                }, // 마커이미지의 크기입니다
                                options: {
                                    offset: {
                                        x: 27,
                                        y: 69,
                                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                                },
                            }
                        }
                    >
                        {info && info.content === marker.content && (
                            <div className="px-2  text-nowrap ">
                                {marker.content}
                            </div>
                        )}
                    </MapMarker>
                ))}
                <ZoomControl position={'TOPRIGHT'} />
            </Map>

            <MapForm
                handleSubmit={handleSubmit}
                inputValue={inputValue}
                onChange={onChange}
                resultList={resultList}
            />
        </div>
    );
}
