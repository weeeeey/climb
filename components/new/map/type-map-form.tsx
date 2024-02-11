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
        <div className="space-y-2 h-16 w-1/2 ">
            <div className="flex space-x-2 justify-start items-start relative">
                <input
                    type="text"
                    className="border-2 pl-2 py-2 rounded-md w-full pr-12  "
                    placeholder="장소를 검색해 주세요"
                    value={inputValue}
                    onChange={onChange}
                />
                <button
                    onClick={handleSearch}
                    className=" bg-slate-300 hover:bg-slate-400 rounded-lg px-2 py-1 absolute right-1 top-1.5"
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
