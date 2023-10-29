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

    try {
        const { postData } = await getPostDataBySlug(slug);

        return {
            title: postData.title,
            description: postData.summary,
            category: postData.category,
            keywords: postData.tag,
            openGraph: {
                title: postData.title,
                images: postData.thumbnail,
                description: postData.summary,
            },
        };
    } catch (error) {
        return {
            title: 'not found',
        };
    }
};

const Page = async ({ params }: Params) => {
    const { slug } = params;

    try {
        const { postData, postContent, headings } = await getPostDataBySlug(
            slug,
        );

        return (
            <Main
                postData={postData!}
                postContent={postContent!}
                headings={headings!}
            />
        );
    } catch (error) {
        return <></>;
    }
};

export default Page;
