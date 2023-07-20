'use client';
import manrope from '@/styles/fonts/manrope';
import Link from 'next/link';
import { styled } from 'styled-components';
import Spinner from '@/components/common/Spinner';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import useBlogQuery from '@/hooks/useBlogQuery';
import { numberPagesViewOneTime } from '@/constants/page';
import { PostData } from '@/types/post';

interface Props {
    postDataList: PostData[];
}

const Main = (props: Props) => {
    const { postDataList } = props;
    const { category, page, isLoading } = useBlogQuery();

    const filteredPostDataList = postDataList.filter(postData => {
        if (category === '') return true;
        return postData.category === category;
    });

    return (
        <>
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
                                    category={category}
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

export default Main;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 0;
    padding: 0 100px;
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
