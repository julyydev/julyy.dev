import { Manrope } from '@next/font/google';

const normal = Manrope({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const manrope = { normal };

export default manrope;
