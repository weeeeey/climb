'use client';
import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { Profile } from '@prisma/client';
import axios from 'axios';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PostLikeProps {
    postId: string;
    loginedProfile: Profile | undefined;
    onChangeCnt: (isIncrease: boolean) => void;
}

export const PostLike = ({
    postId,
    loginedProfile,
    onChangeCnt,
}: PostLikeProps) => {
    const { isSignedIn } = useAuth();
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        if (
            loginedProfile !== undefined &&
            loginedProfile.likes.includes(postId)
        ) {
            setIsLike(true);
        } else {
            setIsLike(false);
        }
    }, [loginedProfile, postId]);

    const handleClick = async () => {
        try {
            if (!isSignedIn) {
                window.alert('로그인 후 추천해주세요.');
                return;
            }
            const res = await axios({
                url: `/api/post/${postId}/like`,
                method: 'PATCH',
                data: {
                    isIncrease: !isLike,
                },
            });
            if (res.status === 200) {
                onChangeCnt(!isLike);
                setIsLike((prev) => !prev);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="text-center">
            <button onClick={handleClick}>
                <Heart
                    className={cn(
                        'w-6 h-6 hover:text-slate-400',
                        isLike && 'fill-red-500 text-red-500'
                    )}
                />
            </button>
        </div>
    );
};
