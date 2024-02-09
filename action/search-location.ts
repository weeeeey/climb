import { MakerType } from '@/components/new/map/type-map-body';

interface SearchLocationProps {
    inputValue: string;
    setResultList: (result: kakao.maps.services.PlacesSearchResult) => void;
    setMarkers: (markers: MakerType[]) => void;
    map: kakao.maps.Map | undefined;
}
export const searchLocation = ({
    inputValue,
    setResultList,
    setMarkers,
    map,
}: SearchLocationProps) => {
    if (!map) {
        return;
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
                        lat: +result[i].y,
                        lng: +result[i].x,
                    },
                    content: result[i].place_name,
                });
                bounds.extend(
                    new kakao.maps.LatLng(+result[i].y, +result[i].x)
                );
            }
            setMarkers(markers);

            map.setBounds(bounds);
        } else {
            window.alert('검색된 결과가 없어요ㅜㅜ');
        }
    });
    return;
};
