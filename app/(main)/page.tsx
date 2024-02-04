import { HotBillboard } from '@/components/hot/hot-billboard';
import { HotBody } from '@/components/hot/hot-body';

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-y-10 ">
            <HotBillboard />
            <HotBody subCategory="recruit" category="crew" />
            <HotBody subCategory="information" category="community" />
            <HotBody subCategory="spot" category="review" />
        </div>
    );
};

export default HomePage;
