import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { PostData } from '@/types/post';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';
import SideMenu from '@/components/SideMenu';
import Pagination from '@/components/Pagination';
import useBlogQuery from '@/hooks/useBlogQuery';
import { numberPagesViewOneTime } from '@/constants/page';
import Spinner from '@/components/common/Spinner';
import manrope from '@/styles/fonts/manrope';

interface Props {
    postDataList: PostData[];
    totalPostNumber: number;
}

const Blog = (props: Props) => {
    const { postDataList, totalPostNumber } = props;
    const { category, page, isLoading } = useBlogQuery();

    const filteredPostDataList = postDataList.filter(postData => {
        if (category === '') return true;
        return postData.category === category;
    });

    return (
        <>
            <Head>
                <title>블로그 | Julyy.dev</title>
            </Head>
            <SideMenu />
            <Container>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {filteredPostDataList.length === 0 ? (
                            <NoPost>
                                '{category}' 카테고리에 게시물이 없습니다.
                            </NoPost>
                        ) : (
                            <>
                                <GridContainer>
                                    {filteredPostDataList
                                        .slice(
                                            numberPagesViewOneTime * (page - 1),
                                            numberPagesViewOneTime * page,
                                        )
                                        .map(postData => (
                                            <StyledLink
                                                key={postData.slug}
                                                href={`/blog/${postData.slug}`}
                                            >
                                                <PostCard postData={postData} />
                                            </StyledLink>
                                        ))}
                                </GridContainer>
                                <Pagination
                                    postNumber={filteredPostDataList.length}
                                    currentPage={page}
                                />
                            </>
                        )}
                    </>
                )}
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const NoPost = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-family: ${manrope.normal.style.fontFamily};
`;
