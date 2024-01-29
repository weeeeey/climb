import {
    HotCrew,
    HotCommu,
    HotMarket,
    HotReview,
    HotBillboard,
} from '@/components/hot';

const HomePage = async () => {
    return (
        <div className="flex flex-col justify-center items-start gap-y-10 ">
            <HotBillboard />
            <HotCrew />
            <HotCommu />
            <HotReview />
            <HotMarket />
        </div>
    );
};

export default HomePage;
