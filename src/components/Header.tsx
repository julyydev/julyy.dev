import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';
import { themedPalette } from '@/styles/themes';
import SearchButton from './SearchButton';

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>
                <LogoLink href={'/'}>
                    julyy.dev<Beta>βeta</Beta>
                </LogoLink>
            </Title>
            <Navigation>
                <SearchButton />
                <ThemeToggleButton />
                <NavigationItem>
                    <MenuLink href="/blog">Blog</MenuLink>
                </NavigationItem>
                <NavigationItem>
                    <MenuLink href="/projects">Projects</MenuLink>
                </NavigationItem>
                <NavigationItem>
                    <MenuLink href="/about">About</MenuLink>
                </NavigationItem>
            </Navigation>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    background-color: ${themedPalette.bg_page1};
    color: ${themedPalette.text1};
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    margin: 0;
`;

const Beta = styled.span`
    font-size: 10px;
`;

const LogoLink = styled(Link)`
    color: ${themedPalette.text1};
    text-decoration: none;
`;

const MenuLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const Navigation = styled.nav`
    display: flex;
`;

const NavigationItem = styled.div`
    color: ${themedPalette.text1};
    font-size: 18px;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
        color: #cccccc;
    }
`;
