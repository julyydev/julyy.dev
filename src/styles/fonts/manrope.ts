import { Manrope } from 'next/font/google';

const normal = Manrope({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const bold = Manrope({
    weight: '700',
    subsets: ['latin'],
    display: 'fallback',
});

const manrope = { normal, bold };

export default manrope;
