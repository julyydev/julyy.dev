import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';

interface Props {
    value: string;
}

const InlineCode = (props: Props) => {
    const { value } = props;
    return <Wrapper>{value}</Wrapper>;
};

export default InlineCode;

const Wrapper = styled.span`
    background-color: ${themedPalette.input};
    color: ${themedPalette.primary_600};
    border-radius: 5px;
    padding: 0 5px;
    font-size: 14px;
`;
