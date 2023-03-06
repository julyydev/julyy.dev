import { GetStaticProps, GetStaticPropsContext } from 'next';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import { PostData } from '@/types/post';
import BlogPostTitle from '@/components/PostTitle';

interface Props {
    postData: PostData;
    postContent: string;
}

const Post = (props: Props) => {
    const { postData, postContent } = props;

    return (
        <Container>
            <BlogPostTitle postData={postData}></BlogPostTitle>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={postContent} />
        </Container>
    );
};

export default Post;

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext,
) => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');
    const fullPath = path.join(postsDirectory, `${context.params?.slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return {
            notFound: true,
        };
    }

    const rawMD = fs.readFileSync(fullPath, 'utf8');
    const processedMD = matter(rawMD);

    return {
        props: { postData: processedMD.data, postContent: processedMD.content },
    };
};

const Container = styled.div`
    width: 52%;
    margin: 0 24%;
`;
