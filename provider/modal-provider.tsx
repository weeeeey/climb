'use client';

import { MapModal } from '@/components/map-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);
    if (!isMount) {
        return;
    }

    return <MapModal />;
};
