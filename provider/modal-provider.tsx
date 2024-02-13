'use client';

import { SignModal } from '@/components/sign-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);
    if (!isMount) {
        return;
    }

    return <SignModal />;
};
