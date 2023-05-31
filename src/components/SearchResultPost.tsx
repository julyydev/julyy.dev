import { themedPalette } from '@/styles/themes';
import { PostData } from '@/types/post';
import { styled } from 'styled-components';

interface Props {
    id: string;
    postData: PostData;
    value: string;
    isFocus: boolean;
    handleClick: () => void;
    handleMouseEnter: () => void;
}

const SearchResultPost = (props: Props) => {
    const { id, postData, value, isFocus, handleClick, handleMouseEnter } =
        props;

    const matches = postData.title.match(new RegExp('(' + value + ')(.*)'));

    return (
        <Wrapper
            id={id}
            $isFocus={isFocus}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
        >
            <Title>
                {matches ? (
                    <>
                        {matches.index! > 0 &&
                            postData.title.slice(0, matches.index)}
                        <Keyword>{matches[1]}</Keyword>
                        {matches[2]}
                    </>
                ) : (
                    postData.title
                )}
            </Title>
            <Summary>{postData.summary}</Summary>
        </Wrapper>
    );
};

export default SearchResultPost;

interface WrapperProps {
    $isFocus: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    padding: 30px;
    background-color: ${props => {
        if (props.$isFocus) return '#efecff';
    }};
    border-left: ${props => {
        if (props.$isFocus) return '5px solid #9980fa';
    }};

    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.div``;

const Summary = styled.div`
    color: ${themedPalette.text3};
    font-size: 15px;
`;

const Keyword = styled.span`
    color: #9980fa;
`;
