import { Metadata } from 'next';
import getAllPostData from '@/lib/getAllPostData';
import Main from './components/Main';

export const metadata: Metadata = {
    title: '블로그 | Julyy.dev',
};

const Page = async () => {
    const { postDataList } = await getAllPostData();

    return <Main postDataList={postDataList} />;
};

export default Page;
