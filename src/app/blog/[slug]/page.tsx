import { Metadata } from 'next';
import Main from './components/Main';
import getPostDataBySlug from '@/lib/getPostDataBySlug';

interface Params {
    params: {
        slug: string;
    };
}

export const generateMetadata = async ({
    params,
}: Params): Promise<Metadata> => {
    const { slug } = params;
    const { postData, notFound } = await getPostDataBySlug(slug);

    if (notFound)
        return {
            title: 'not found',
        };

    return {
        title: postData?.title,
        openGraph: {
            title: postData?.title,
            images: postData?.thumbnail,
            description: postData?.summary,
        },
    };
};

const Page = async ({ params }: Params) => {
    const { slug } = params;
    const { postData, postContent, headings, notFound } =
        await getPostDataBySlug(slug);

    if (notFound) return <></>;

    return (
        <Main
            postData={postData!}
            postContent={postContent!}
            headings={headings!}
        />
    );
};

export default Page;
