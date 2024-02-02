import React from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';

export const ContentsHead = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-full text-lg">제목</TableHead>
                <TableHead />
                <TableHead className="text-right">작성일</TableHead>
            </TableRow>
        </TableHeader>
    );
};
