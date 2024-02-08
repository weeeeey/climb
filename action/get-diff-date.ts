import {
    differenceInDays,
    differenceInMinutes,
    differenceInHours,
} from 'date-fns';

export const getDiffDate = (crt: string, ut: string) => {
    console.log(crt);
    console.log(ut);
    if (crt === ut) {
        return '';
    }
    const curDate = new Date();
    const updatedAt = new Date(ut);
    let diff = '';
    if (updatedAt.toDateString() === curDate.toDateString()) {
        const minutesDifference = Math.abs(
            differenceInMinutes(curDate, updatedAt)
        );
        if (minutesDifference < 60) {
            diff = `(${minutesDifference}분 전 수정)`;
        } else {
            diff = `(${Math.abs(
                differenceInHours(curDate, updatedAt)
            )}시간 전 수정)`;
        }
    } else {
        const dayDifference = differenceInDays(curDate, updatedAt);

        diff = `(${dayDifference}일 전 수정)`;
    }
    return diff;
};
