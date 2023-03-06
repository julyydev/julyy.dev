import { PostData } from '@/types/post';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
    postData: PostData;
}

const PostCard = (props: Props) => {
    const { postData } = props;

    return (
        <CardContainer>
            <Thumbnail>
                <Image
                    src={postData.thumbnail}
                    alt={postData.title}
                    priority={true}
                    width={100}
                    height={100}
                    style={{ width: '100%', height: '100%' }}
                />
            </Thumbnail>
            <CardContent>
                <Title>{postData.title}</Title>
                <Summary>{postData.summary}</Summary>
                <Meta>
                    <Category>{postData.category}</Category>
                    {postData.series && <Series>{postData.series}</Series>}
                    {postData.tag.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                    <Date>{postData.date}</Date>
                </Meta>
            </CardContent>
        </CardContainer>
    );
};

export default PostCard;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
`;

const Title = styled.h2`
    font-size: 24px;
    margin: 0;
`;

const Summary = styled.p`
    margin: 16px 0;
`;

const Meta = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const Category = styled.span`
    background-color: #f0f0f0;
    color: #333;
    border-radius: 4px;
    font-size: 14px;
    padding: 4px 8px;
    margin-right: 8px;
`;

const Series = styled(Category)`
    background-color: #333;
    color: #fff;
`;

const Tag = styled(Category)`
    background-color: #fff;
    color: #333;
    margin-right: 8px;
`;

const Date = styled.span`
    margin-left: auto;
    font-size: 14px;
`;
