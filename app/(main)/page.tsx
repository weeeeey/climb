import { userLikes } from '@/action/user-likes';
import { HotBillboard } from '@/components/hot/hot-billboard';
import { HotBody } from '@/components/hot/hot-body';

const HomePage = async () => {
    const likeArray = await userLikes();
    return (
        <div className="flex flex-col justify-center items-start gap-y-10 ">
            <HotBillboard />
            <HotBody
                likeArray={likeArray}
                subCategory="recruit"
                category="crew"
            />
            <HotBody
                likeArray={likeArray}
                subCategory="information"
                category="community"
            />
            <HotBody
                likeArray={likeArray}
                subCategory="spot"
                category="review"
            />
        </div>
    );
};

export default HomePage;
