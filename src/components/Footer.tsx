import manrope from '@/styles/fonts/manrope';
import { themedPalette } from '@/styles/themes';
import styled from 'styled-components';
import Divider from './common/Divider';

const Footer = () => {
    return (
        <Wrapper>
            <Divider width="95%" />
            <CopyRight>© 2023 Julyy, All Rights Reserved.</CopyRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 60px;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

const CopyRight = styled.div`
    font-family: ${manrope.normal.style.fontFamily};
    color: ${themedPalette.text3};
`;

export default Footer;
