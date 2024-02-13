import { userLikes } from '@/action/user-likes';
import { HotBody } from '@/components/hot/hot-body';

const HomePage = async () => {
    const likeArray = await userLikes();
    return (
        <div className="flex flex-col justify-center items-start gap-y-5 ">
            <HotBody
                likeArray={likeArray}
                subCategory="spot"
                category="review"
            />
            <HotBody
                likeArray={likeArray}
                subCategory="recruit"
                category="crew"
            />
            <HotBody
                likeArray={likeArray}
                subCategory="oneTimeMeeting"
                category="crew"
            />
        </div>
    );
};

export default HomePage;
