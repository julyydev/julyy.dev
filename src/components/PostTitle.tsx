import { PostData } from '@/types/post';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
    postData: PostData;
}

const BlogPostTitle = (props: Props) => {
    const { postData } = props;

    return (
        <Wrapper>
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
            <Title>{postData.title}</Title>
            <Summary>{postData.summary}</Summary>
            <MetaData>
                <Category>{postData.category}</Category>
                {postData.tag.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
                <Date>{postData.date}</Date>
            </MetaData>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 688px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
    }
`;

const Thumbnail = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
`;

const Title = styled.h2`
    margin-top: 0;
    color: white;
`;

const Summary = styled.p`
    font-style: italic;
    color: white;
`;

const MetaData = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const Category = styled.span`
    background-color: #eee;
    padding: 3px 5px;
    border-radius: 3px;
    margin-right: 5px;
`;

const Tag = styled.span`
    background-color: #eee;
    padding: 3px 5px;
    border-radius: 3px;
    margin-right: 5px;
`;

const Date = styled.span`
    margin-left: auto;
    color: white;
`;

export default BlogPostTitle;
