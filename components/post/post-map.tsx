import { boardTitleFont } from '@/font.config';
import { StaticMap } from 'react-kakao-maps-sdk';

interface PostMapProps {
    place?: string | undefined;
    lat?: number | undefined;
    lng?: number | undefined;
}

export const PostMap = ({ lat, lng, place }: PostMapProps) => {
    if (!lat || !lng) {
        return;
    }
    return (
        <>
            <StaticMap
                className="md:w-1/2 lg:w-1/3 w-72 h-72"
                center={{
                    lat,
                    lng,
                }}
                level={3}
                marker={{
                    text: place,
                    position: {
                        lat,
                        lng,
                    },
                }}
            />
        </>
    );
};
