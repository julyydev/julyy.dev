import styled from 'styled-components';
import notoSansKR from '@/styles/fonts/notoSansKR';

const BlogMain = () => {
    return (
        <>
            <Title>BLOG 🖋️</Title>
            <div>개발하면서 공부한 내용들과 고민의 흔적들을 기록합니다.</div>
            <SubTitle>최신 글 보기</SubTitle>
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
