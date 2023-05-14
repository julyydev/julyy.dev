import { themedPalette } from '@/styles/themes';
import styled from 'styled-components';

interface Props {
    width: string;
}

const Divider = (props: Props) => {
    const { width } = props;
    return <_Divider width={width}></_Divider>;
};

export default Divider;

const _Divider = styled.hr<Props>`
    width: ${props => props.width};
    height: 1px;
    border: 0;
    background-color: ${themedPalette.text3};
`;
