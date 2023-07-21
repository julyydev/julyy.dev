import { Metadata } from 'next';
import getAllPostData from '@/lib/getAllPostData';
import Main from './components/Main';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: '블로그 | Julyy.dev',
};

const Page = async () => {
    const { postDataList } = await getAllPostData();

    return (
        <Suspense>
            <Main postDataList={postDataList} />
        </Suspense>
    );
};

export default Page;
