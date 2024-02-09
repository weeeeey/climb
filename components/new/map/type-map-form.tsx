import { MapResultList } from './map-resultList';
import { MakerType } from './type-map-body';
import { TypeMapResultList } from './type-map-resultList';

interface TypeMapFormProps {
    inputValue: string;
    onChange: (v: React.FormEvent<HTMLInputElement>) => void;
    handleSearch: (e: React.MouseEvent<HTMLButtonElement>) => void;
    resultList: kakao.maps.services.PlacesSearchResult;
    onClickList: (
        clickMarker: kakao.maps.services.PlacesSearchResultItem
    ) => void;
    selectedInfo: MakerType | undefined;
}

export const TypeMapForm = ({
    inputValue,
    onChange,
    handleSearch,
    resultList,
    onClickList,
    selectedInfo,
}: TypeMapFormProps) => {
    return (
        <div className="space-y-2 h-16 ">
            <div className="flex space-x-2 justify-start items-center">
                <input
                    type="text"
                    className="border-2 px-2 py-1 rounded-md  "
                    placeholder="장소를 검색해 주세요"
                    value={inputValue}
                    onChange={onChange}
                />
                <button
                    onClick={handleSearch}
                    className=" bg-slate-300 hover:bg-slate-500 rounded-lg ml-10 px-2 py-1"
                >
                    검색
                </button>
            </div>
            <TypeMapResultList
                selectedInfo={selectedInfo}
                resultList={resultList}
                onClickList={onClickList}
            />
        </div>
    );
};
