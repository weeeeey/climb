import React from 'react';

const NewPageLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="lg:px-32 mt-20">{children}</div>;
};

export default NewPageLayout;
