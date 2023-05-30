import { atom } from 'recoil';

export const isDarkState = atom<boolean>({
    key: 'authRequestIdsState',
    default: false,
});
