'use client';
import manrope from '@/styles/fonts/manrope';
import Link from 'next/link';
import { styled } from 'styled-components';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import { numberCategoryPostsViewOneTime } from '@/constants/page';
import { PostData } from '@/types/post';
import { themedPalette } from '@/styles/themes';
import BlogMain from '@/app/blog/components/BlogMain';
import { useSearchParams } from 'next/navigation';

interface Props {
    postDataList: PostData[];
}

const Main = (props: Props) => {
    const { postDataList } = props;
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const page = Number(searchParams.get('page')) || 1;

    const sortedPostDataList = postDataList.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    const filteredPostDataList = sortedPostDataList.filter(postData => {
        if (category === 'all') return true;
        return postData.category === category;
    });

    if (category === null)
        return (
            <Container>
                <BlogMain postDataList={sortedPostDataList} />
            </Container>
        );

    return (
        <Container>
            <>
                <Category>{category.toUpperCase()}</Category>
                {filteredPostDataList.length === 0 ? (
                    <NoPost>게시물이 없습니다.</NoPost>
                ) : (
                    <GridWrapper>
                        <GridContainer>
                            {filteredPostDataList
                                .slice(
                                    numberCategoryPostsViewOneTime * (page - 1),
                                    numberCategoryPostsViewOneTime * page,
                                )
                                .map(postData => (
                                    <PostCard
                                        key={postData.slug}
                                        postData={postData}
                                    />
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
        </Container>
    );
};

export default Main;

const Container = styled.div`
    margin-left: 260px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 992px) {
        margin-left: 0;
        padding: 0 30px;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 0 15px;
    }
`;

const GridContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    justify-items: center;
    align-items: center;

    @media (max-width: 1700px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1350px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
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
        width: 100px;
    }

    &:after {
        display: inline-block;
        margin: 13px 0 3px 20px;
        height: 1px;
        content: '';
        background-color: ${themedPalette.text3};
        width: 100px;
    }
`;

const GridWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

const NoPost = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-family: ${manrope.normal.style.fontFamily};
`;
