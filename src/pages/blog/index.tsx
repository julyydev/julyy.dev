import { GetStaticProps, GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { PostData } from '@/types/post';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import styled from 'styled-components';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import SideMenu from '@/components/SideMenu';

interface Props {
    postDataList: PostData[];
    totalPostNumber: number;
}

const Blog = (props: Props) => {
    const { postDataList, totalPostNumber } = props;
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const hasCategory = (postDataList: PostData[]) => {
        let hasCategory = false;
        postDataList.forEach(postData => {
            if (postData.category === category) {
                hasCategory = true;
            }
        });
        return hasCategory;
    };

    return (
        <>
            <Head>
                <title>블로그 | Julyy.dev</title>
            </Head>
            <SideMenu />
            <Container>
                <NoPost>
                    {!hasCategory(postDataList) && category !== null && (
                        <div>'{category}' 카테고리에 게시물이 없습니다.</div>
                    )}
                </NoPost>
                <GridContainer>
                    {postDataList.map(postData => {
                        if (category === null || postData.category === category)
                            return (
                                <StyledLink
                                    href={`/blog/${postData.slug}`}
                                    key={postData.slug}
                                >
                                    <PostCard postData={postData} />
                                </StyledLink>
                            );
                    })}
                </GridContainer>
            </Container>
        </>
    );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');
    let totalPostNumber = 0;

    const files = fs.readdirSync(postsDirectory);
    const postDataList = files.map(file => {
        const rawMD = fs.readFileSync(postsDirectory + '/' + file, 'utf8');
        const processedMD = matter(rawMD);
        totalPostNumber++;
        return processedMD.data;
    });

    return { props: { postDataList, totalPostNumber } };
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 0px;
    padding: 0px 100px;
`;

const Container = styled.div`
    margin: 0 15%;
    width: 70%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const NoPost = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
`;
