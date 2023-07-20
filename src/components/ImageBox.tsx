import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';

interface Props {
    children: any;
    caption: string | null;
}

const ImageBox = (props: Props) => {
    const { children, caption } = props;
    return (
        <Wrapper>
            <span>{children}</span>
            <Caption>{caption}</Caption>
        </Wrapper>
    );
};

export default ImageBox;

const Wrapper = styled.p`
    text-align: center;
`;

const Caption = styled.span`
    display: block;
    color: ${themedPalette.text3};
    font-size: 14px;
`;
