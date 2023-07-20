import { PostData } from '@/types/post';
import styled from 'styled-components';
import Image from 'next/image';
import nanumGothic from '@/styles/fonts/nanumGothic';
import CategoryLabel from './CategoryLabel';
import { themedPalette } from '@/styles/themes';
import { CalendarIcon, TagIcon } from '@/assets/svg';
import TagLabel from '@/components/TagLabel';

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
                    placeholder="blur"
                    blurDataURL={postData.thumbnail}
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: '100%' }}
                />
            </Thumbnail>
            <CardContent>
                <CardContentTopWrapper>
                    <CategoryLabel value={postData.category} />
                    <DateWrapper>
                        <CalendarIcon
                            width={12}
                            height={12}
                            fill={themedPalette.text3}
                        />
                        <Date>{postData.date}</Date>
                    </DateWrapper>
                </CardContentTopWrapper>
                <Title>{postData.title}</Title>
                <Summary>{postData.summary}</Summary>
                <TagWrapper>
                    {postData.tag.map(tag => (
                        <TagLabel key={tag} value={tag}></TagLabel>
                    ))}
                </TagWrapper>
            </CardContent>
        </CardContainer>
    );
};

export default PostCard;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    overflow: hidden;
    width: 90%;
    font-family: ${nanumGothic.normal.style.fontFamily};
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    }
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    background-color: ${themedPalette.bg_page2};
`;

const CardContentTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 18px;
    font-family: ${nanumGothic.bold.style.fontFamily};
    color: ${themedPalette.text1};
    margin-top: 16px;
`;

const Summary = styled.div`
    font-size: 14px;
    font-family: ${nanumGothic.normal.style.fontFamily};
    margin: 16px 0;
    color: ${themedPalette.text2};
    width: 100%;
    height: 32px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

const TagWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const DateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
`;

const Date = styled.div`
    margin-left: 5px;
    font-size: 12px;
    color: ${themedPalette.text3};
`;
