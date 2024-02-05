import {
    Rubik_Doodle_Triangles,
    Rubik_Doodle_Shadow,
    Rubik_Bubbles,
    Single_Day,
} from 'next/font/google';

export const navFont = Rubik_Doodle_Shadow({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const selectNavFont = Rubik_Doodle_Triangles({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const hotTitleFont = Rubik_Bubbles({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
});

export const boardTitleFont = Single_Day({
    weight: '400',
    style: ['normal'],
});
