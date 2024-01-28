import { navFont, selectNavFont } from '@/font.config';

export const selectedFont = (url: string, pathname: string) => {
    if (url === pathname) {
        return selectNavFont.className;
    } else {
        return navFont.className;
    }
};
