'use client';
import { cn } from '@/lib/utils';
import { Profile } from '@prisma/client';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PostDeleteProps {
    postId: string;
    loginedProfile: Profile | undefined;
    athuorId: string;
}

export const PostUpdate = ({
    athuorId,
    loginedProfile,
    postId,
}: PostDeleteProps) => {
    const router = useRouter();
    const handleUpdate = () => {
        router.push(`/modify/${postId}`);
    };
    return (
        <button
            onClick={handleUpdate}
            className={cn(
                'hidden',
                loginedProfile && loginedProfile.id === athuorId && 'block'
            )}
        >
            <Pencil className="w-8 h-8  text-slate-500 hover:text-slate-600" />
        </button>
    );
};
