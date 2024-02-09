import React from 'react';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { PostMap } from './post-map';
interface PostContentProps {
    content: string;
    place?: string | undefined;
    lat?: number | undefined;
    lng?: number | undefined;
}

export const PostContent = ({ content, place, lat, lng }: PostContentProps) => {
    return (
        <div className="space-y-5 px-3">
            <div
                className="view ql-editor "
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                }}
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'pre-wrap',
                }}
            />
            {place && <PostMap place={place} lat={lat} lng={lng} />}
        </div>
    );
};
