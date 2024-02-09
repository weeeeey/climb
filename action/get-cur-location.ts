import { MakerType } from '@/components/new/map/type-map-body';

interface getCurLocationProps {
    setInitialLocation: ({ content, position }: MakerType) => void;
    setMarkers: ([{ content, position }]: MakerType[]) => void;
    location?: {
        place?: string | undefined;
        lat?: number | undefined;
        lng?: number | undefined;
    };
}

export const getCurLocation = ({
    setInitialLocation,
    setMarkers,
    location,
}: getCurLocationProps) => {
    if (location?.place && location.lat && location.lng) {
        setInitialLocation({
            content: location.place,
            position: {
                lat: location.lat,
                lng: location.lng,
            },
        });
        setMarkers([
            {
                content: location.place,
                position: {
                    lat: location.lat,
                    lng: location.lng,
                },
            },
        ]);
    } else if ('geolocation' in navigator) {
        const sucessGet = (position: GeolocationPosition) => {
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
        };
        const denyGet = () => {
            setInitialLocation({
                position: {
                    lat: 33.450701,
                    lng: 126.570667,
                },
            });
        };
        navigator.geolocation.getCurrentPosition(sucessGet, denyGet);
    } else {
        console.log('Geolocation을 지원하지 않습니다.');
        setInitialLocation({
            position: {
                lat: 33.450701,
                lng: 126.570667,
            },
        });
    }
};
