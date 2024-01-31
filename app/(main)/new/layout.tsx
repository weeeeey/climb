import { Loading } from '@/components/loading';
import React, { Suspense } from 'react';

const NewPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-32 mt-20">
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
    );
};

export default NewPageLayout;
