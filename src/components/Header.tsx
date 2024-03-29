import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';
import { themedPalette } from '@/styles/themes';
import { Pacifico } from 'next/font/google';
import useScrollTop from '@/hooks/useScrollTop';
import manrope from '@/styles/fonts/manrope';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const match = pathname.match(/^\/([^\/]+)/);
    const activeMenu = match && match[1];
    const { isScrollTop } = useScrollTop();

    return (
        <HeaderWrapper $isScrollTop={isScrollTop}>
            <ScrollProgressBar />
            <Title>
                <LogoLink href={'/'}>Julyy.dev</LogoLink>
            </Title>
            <Navigation>
                <ThemeToggleButton />
                <NavigationItem $isActive={activeMenu === 'blog'}>
                    <MenuLink href="/blog">Blog</MenuLink>
                </NavigationItem>
                <NavigationItem $isActive={activeMenu === 'resume'}>
                    <MenuLink href="/resume">Resume</MenuLink>
                </NavigationItem>
            </Navigation>
        </HeaderWrapper>
    );
};

export default Header;

const font = Pacifico({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

interface HeaderWrapperProps {
    $isScrollTop: boolean;
}

const HeaderWrapper = styled.header<HeaderWrapperProps>`
    background-color: ${themedPalette.opaque_bg_page1};
    color: ${themedPalette.text1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    font-family: ${manrope.normal.style.fontFamily};
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    top: 0;
    backdrop-filter: blur(7px);
    z-index: 100;
    height: 64px;
    box-shadow: ${props => {
        if (!props.$isScrollTop) return `0 2px 6px -6px ${themedPalette.text1}`;
    }};
`;

const Title = styled.h1`
    font-family: ${font.style.fontFamily};
    font-size: 25px;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 16px;
        margin-left: -20px;
    }
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

    @media (max-width: 768px) {
        margin-right: -20px;
    }
`;

interface NavigationItemProps {
    $isActive: boolean;
}

const NavigationItem = styled.div<NavigationItemProps>`
    color: ${props => {
        if (props.$isActive) return themedPalette.primary_500;
        else return themedPalette.text3;
    }};
    font-size: 16px;
    margin-left: 20px;
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;

    &:hover {
        color: ${themedPalette.text1};
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;
