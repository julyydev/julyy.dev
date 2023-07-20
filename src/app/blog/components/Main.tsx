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
import { themedPalette } from '@/styles/themes';
import BlogMain from '@/app/blog/components/BlogMain';

interface Props {
    postDataList: PostData[];
}

const Main = (props: Props) => {
    const { postDataList } = props;
    const { category, page, isLoading } = useBlogQuery();

    const filteredPostDataList = postDataList.filter(postData => {
        if (category === 'all') return true;
        return postData.category === category;
    });

    if (isLoading) return <Spinner />;

    return (
        <Container>
            <>
                {category === null ? (
                    <BlogMain />
                ) : (
                    <>
                        <Category>{category.toUpperCase()}</Category>

                        {filteredPostDataList.length === 0 ? (
                            <NoPost>게시물이 없습니다.</NoPost>
                        ) : (
                            <GridWrapper>
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
                            </GridWrapper>
                        )}
                    </>
                )}
            </>
        </Container>
    );
};

export default Main;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 0;
    padding: 0 100px;
`;

const Category = styled.div`
    font-size: 19px;
    color: ${themedPalette.text1};
    display: flex;
    justify-content: center;
    font-family: ${manrope.bold.style.fontFamily};
    margin: 10px 0 30px 0;

    &:before {
        display: inline-block;
        margin: 13px 20px 3px 0;
        height: 1px;
        content: '';
        background-color: ${themedPalette.text3};
        width: 150px;
    }

    &:after {
        display: inline-block;
        margin: 13px 0 3px 20px;
        height: 1px;
        content: '';
        background-color: ${themedPalette.text3};
        width: 150px;
    }
`;

const GridWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

const Container = styled.div`
    margin: 0 15%;
    width: 70%;
    display: flex;
    flex-direction: column;
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
