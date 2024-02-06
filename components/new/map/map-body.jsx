'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { MapForm } from './map-form';

export default function KakaoMap() {
    const [inputValue, setInputValue] = useState('');
    const [resultList, setResultList] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [info, setInfo] = useState();
    const [markers, setMarkers] = useState([
        {
            position: {
                lat: 37.566826,
                lng: 126.9786567,
            },
        },
    ]);
    const [map, setMap] = useState();

    useEffect(() => {
        if (!map) return;
    }, [map]);

    useEffect(() => {
        console.log(selectedInfo);
    }, [selectedInfo]);

    const onChange = (v) => {
        setInputValue(v.currentTarget.value);
    };
    const handleSelectedMarker = (clickedMarker) => {
        console.log(clickedMarker);
    };
    const handleSubmit = () => {
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
        <div className="flex space-x-2 ">
            <Map // 로드뷰를 표시할 Container
                center={{
                    lat: 37.566826,
                    lng: 126.9786567,
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
