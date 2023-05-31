'use client';
import manrope from '@/styles/fonts/manrope';
import { themedPalette } from '@/styles/themes';
import { styled } from 'styled-components';

const Keyboard = ({ children }: { children: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Keyboard;

const Wrapper = styled.kbd`
    padding: 2px 5px;
    border-radius: 5px;
    margin: 2px;
    box-shadow: 1px 1px 1px 0px ${themedPalette.text3};
    font-family: ${manrope.normal.style.fontFamily};
    font-size: 10px;
    color: ${themedPalette.text3};
    background-color: ${themedPalette.bg_page1};
`;
