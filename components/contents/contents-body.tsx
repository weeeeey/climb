import { Table } from '@/components/ui/table';
import { ContentsHead } from './contents-head';
import { ContentsRows } from './contents-rows';
import { ContentsBodyProps } from './contents-types';

export const ContentsBody = ({ posts, subCategory }: ContentsBodyProps) => {
    return (
        <div className="xl:mx-52 mt-10 space-y-5">
            <h2 className="bg-slate-200 rounded-lg inline text-xl px-3 py-1">
                {subCategory.charAt(0).toUpperCase() + subCategory.slice(1)}
            </h2>

            <Table>
                <ContentsHead />
                <ContentsRows posts={posts} />
            </Table>
        </div>
    );
};
