import { Nanum_Gothic } from 'next/font/google';

const normal = Nanum_Gothic({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const bold = Nanum_Gothic({
    weight: '700',
    subsets: ['latin'],
    display: 'fallback',
});

const nanumGothic = { normal, bold };

export default nanumGothic;
