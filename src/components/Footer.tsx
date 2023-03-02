import { themedPalette } from '@/styles/themes';
import styled from 'styled-components';

const Footer = () => {
    return <CopyRight>© 2023 Julyy, All Rights Reserved.</CopyRight>;
};

const CopyRight = styled.div`
    color: ${themedPalette.text1};
`;

export default Footer;
