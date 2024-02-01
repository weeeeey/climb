export type SafePost = {
    id: string;
    title: string;
    createdAt: Date;
    viewed: number;
    like: number;
    profile: {
        name: string;
    };
};
export interface ContentsBodyProps {
    posts: SafePost[];

    subCategory: string;
}
