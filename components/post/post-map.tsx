import { StaticMap } from 'react-kakao-maps-sdk';

export const PostMap = () => {
    return (
        <StaticMap
            center={{
                lat: 33.450701,
                lng: 126.570667,
            }}
            style={{
                width: '50%',
                height: '350px',
            }}
            level={3}
            marker={{
                position: {
                    lat: 33.450701,
                    lng: 126.570667,
                },
            }}
        />
    );
};
