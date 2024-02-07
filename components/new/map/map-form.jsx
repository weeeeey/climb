import React from 'react';
import { MapResultList } from './map-resultList';

export const MapForm = ({
    inputValue,
    onChange,
    handleSearch,
    resultList,
    onClickList,
    selectedInfo,
}) => {
    return (
        <div className="space-y-2 h-16 ">
            <div className="flex space-x-2 justify-start items-center">
                <input
                    type="text"
                    className="border-2 px-2 py-1 rounded-md  "
                    placeholder="다녀오신 곳을 찾아주세요"
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
            <MapResultList
                selectedInfo={selectedInfo}
                resultList={resultList}
                onClickList={onClickList}
            />
        </div>
    );
};
