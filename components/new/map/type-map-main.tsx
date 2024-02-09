import React from 'react';
import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';
import { MakerType } from './type-map-body';

interface TypeMapMainProps {
    markers: MakerType[];
    selectedInfo: MakerType | undefined;
    info: MakerType | undefined;
    handleSelectedMarker: (clickedMarker: MakerType) => void;
    setInfo: (maker: MakerType | undefined) => void;
    setMap: (map: kakao.maps.Map) => void;
    initialLocation: MakerType;
}

export const TypeMapMain = ({
    markers,
    selectedInfo,
    info,
    handleSelectedMarker,
    setInfo,
    setMap,
    initialLocation,
}: TypeMapMainProps) => {
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
                    onMouseOut={() => setInfo(undefined)}
                    image={{
                        src: '/marker.png',
                        size: {
                            width: marker === selectedInfo ? 64 : 32,
                            height: marker === selectedInfo ? 69 : 32,
                        },
                        options: {
                            offset: {
                                x: marker === selectedInfo ? 27 : 12,
                                y: marker === selectedInfo ? 69 : 32,
                            },
                        },
                    }}
                    zIndex={marker === selectedInfo ? 1 : 0}
                >
                    {info && info === marker && (
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
