import { Nanum_Gothic, Noto_Sans_KR } from 'next/font/google';

const normal = Noto_Sans_KR({
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
