import React from 'react';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="lg:px-32 mt-10 ">{children}</div>;
};

export default PostLayout;
