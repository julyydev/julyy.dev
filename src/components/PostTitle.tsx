import { PostData } from '@/types/post';
import Image from 'next/image';
import styled from 'styled-components';
import TagLabel from '@/components/TagLabel';
import Divider from '@/components/common/Divider';
import { themedPalette } from '@/styles/themes';

interface Props {
    postData: PostData;
}

const BlogPostTitle = (props: Props) => {
    const { postData } = props;

    return (
        <>
            <Wrapper>
                <Title>{postData.title}</Title>
                <MetaData>@julyydev · {postData.date}</MetaData>
                <TagWrapper>
                    {postData.tag.map(tag => (
                        <TagLabel key={tag} value={tag} />
                    ))}
                </TagWrapper>
            </Wrapper>
            <ImageWrapper>
                <Thumbnail
                    src={postData.thumbnail}
                    alt={postData.title}
                    placeholder="blur"
                    blurDataURL={postData.thumbnail}
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: '100%' }}
                />
            </ImageWrapper>
            <Summary>{postData.summary}</Summary>
            <Divider width={'100%'} color={themedPalette.text4}></Divider>
        </>
    );
};

const Wrapper = styled.div`
    @media (max-width: 768px) {
        width: calc(100% - 40px);
    }
`;

const ImageWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Thumbnail = styled(Image)`
    border-radius: 5px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 48px;
    margin-top: 0;
`;

const Summary = styled.div`
    font-style: italic;
    margin-bottom: 20px;
    border-left: 7px solid ${themedPalette.primary_500};
    margin-left: 10px;
    padding-left: 10px;
`;

const MetaData = styled.div`
    font-weight: bold;
    margin-bottom: 20px;
`;

const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default BlogPostTitle;
