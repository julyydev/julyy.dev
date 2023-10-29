import styled from 'styled-components';
import notoSansKR from '@/styles/fonts/notoSansKR';
import { numberLatestPostsViewOneTime } from '@/constants/page';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { PostData } from '@/types/post';

interface Props {
    postDataList: PostData[];
}

const BlogMain = (props: Props) => {
    const { postDataList } = props;

    return (
        <>
            <Title>BLOG 🖋️</Title>
            <div>개발하면서 공부한 내용들과 고민의 흔적들을 기록합니다.</div>
            <SubTitle>최신 글 보기</SubTitle>

            <GridWrapper>
                <GridContainer>
                    {postDataList
                        .slice(0, numberLatestPostsViewOneTime)
                        .map(postData => (
                            <PostCard key={postData.slug} postData={postData} />
                        ))}
                </GridContainer>
            </GridWrapper>
        </>
    );
};

export default BlogMain;

const Title = styled.h2`
    font-family: ${notoSansKR.bold.style.fontFamily};
    font-size: 36px;
`;

const SubTitle = styled.h3`
    font-family: ${notoSansKR.bold.style.fontFamily};
    font-size: 28px;
`;

const GridWrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
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
