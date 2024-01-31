import { navFont, selectNavFont } from '@/font.config';

export const selectedFont = (url: string, pathname: string) => {
    if (pathname.includes(url)) {
        return selectNavFont.className;
    } else {
        return navFont.className;
    }
};
