import axios from 'axios';

interface fetchFnProps {
    cType: 'post' | 'subCategory' | 'hot' | 'comment';
    id: string;
    selectedPage?: number;
    searchTitle?: string;
}

export const fetchFn = async ({
    id,
    cType,
    selectedPage,
    searchTitle,
}: fetchFnProps) => {
    try {
        const url = `/api/${cType}/${id}`;

        const res = await axios({
            url,
            method: 'GET',
            params: {
                selectedPage,
                searchTitle,
            },
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
