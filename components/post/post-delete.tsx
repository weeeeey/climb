'use client';
import { subCategories } from '@/config/data';
import { cn } from '@/lib/utils';
import { Profile } from '@prisma/client';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

interface PostDeleteProps {
    postId: string;
    loginedProfile: Profile | undefined;
    athuorId: string;
}
type SubCategoryKey = keyof typeof subCategories;

function getKeyByValue(value: string) {
    return Object.keys(subCategories).find((key) =>
        subCategories[key as SubCategoryKey].includes(value)
    );
}

export const PostDelete = ({
    postId,
    loginedProfile,
    athuorId,
}: PostDeleteProps) => {
    const router = useRouter();

    const handleDelete = async () => {
        if (!window.confirm('정말 삭제하시겠어요?')) {
            return;
        }
        try {
            const res = await axios({
                method: 'DELETE',
                url: `/api/post/${postId}`,
                data: {
                    athuorId,
                },
            });
            if (res.status === 200) {
                const category = getKeyByValue(res.data);
                router.refresh();
                toast.success('삭제 성공');
                router.push(`/${category}/${res.data}`);
            }
        } catch (error) {
            toast.error('삭제 실패 ㅠㅠ');
        }
    };
    return (
        <button
            onClick={handleDelete}
            className={cn(
                'hidden',
                loginedProfile && loginedProfile.id === athuorId && 'block'
            )}
        >
            <Trash2 className="w-8 h-8 text-slate-500 hover:text-slate-600" />
        </button>
    );
};
