import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

export const MapMain = ({
    markers,
    selectedInfo,
    info,
    handleSelectedMarker,
    setInfo,
    setMap,
    initialLocation,
}) => {
    return (
        <Map // 로드뷰를 표시할 Container
            center={{
                lat: initialLocation.position.lat,
                lng: initialLocation.position.lng,
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
                            src: '/marker.png',
                            size: {
                                width: 64,
                                height: 69,
                            },
                            options: {
                                offset: {
                                    x: 27,
                                    y: 69,
                                },
                            },
                        }
                    }
                    zIndex={marker === selectedInfo && 1}
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
    );
};