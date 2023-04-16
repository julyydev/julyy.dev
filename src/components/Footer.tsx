import { themedPalette } from '@/styles/themes';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <Divider />
            <CopyRight>© 2023 Julyy, All Rights Reserved.</CopyRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Divider = styled.hr`
    margin-top: 500px;
    width: 80%;
    height: 1px;
    background-color: black;
    border: 0;
`;

const CopyRight = styled.div`
    color: ${themedPalette.text1};
`;

export default Footer;
