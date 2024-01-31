import { ClipLoader } from 'react-spinners';

export const Loading = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <ClipLoader />;
        </div>
    );
};
