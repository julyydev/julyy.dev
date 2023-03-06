import { GetStaticProps, GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { PostData } from '@/types/post';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
    postDataList: PostData[];
}

const Blog = (props: Props) => {
    const { postDataList } = props;

    return (
        <Container>
            <GridContainer>
                {postDataList.map(postData => {
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
    );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');

    const files = fs.readdirSync(postsDirectory);
    const postDataList = files.map(file => {
        const rawMD = fs.readFileSync(postsDirectory + '/' + file, 'utf8');
        const processedMD = matter(rawMD);
        return processedMD.data;
    });

    return { props: { postDataList } };
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
`;

const Container = styled.div`
    width: 70%;
    margin: 0 15%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
