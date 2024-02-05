import axios from 'axios';

interface fetchFnProps {
    cType: 'post' | 'subCategory' | 'hot';
    id: string;
    selectedPage?: number;
}

export const fetchFn = async ({ id, cType, selectedPage }: fetchFnProps) => {
    try {
        const url = `/api/${cType}/${id}`;

        const res = await axios({
            url,
            method: 'GET',
            params: {
                selectedPage,
            },
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
