import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <Title>
                <LogoLink href={'/'}>julyy.dev</LogoLink>
            </Title>
            <Navigation>
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
    background-color: #333333;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    margin: 0;
`;

const LogoLink = styled(Link)`
    color: #ffffff;
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
    color: #ffffff;
    font-size: 18px;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
        color: #cccccc;
    }
`;
