import axios from 'axios';

interface fetchFnProps {
    cType: 'post' | 'subCategory';
    id: string;
}

export const fetchFn = async ({ id, cType }: fetchFnProps) => {
    try {
        const url = cType === 'post' ? `/api/post/${id}` : `/api/sub/${id}`;
        const res = await axios({
            url,
            method: 'GET',
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};
