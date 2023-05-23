import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';
import { themedPalette } from '@/styles/themes';
import SearchButton from './SearchButton';
import { Pacifico } from 'next/font/google';
import useActiveMenu from '@/hooks/useActiveMenu';
import useScrollTop from '@/hooks/useScrollTop';
import manrope from '@/styles/fonts/manrope';

const Header = () => {
    const { activeMenu, setActiveMenu } = useActiveMenu();
    const { isScrollTop } = useScrollTop();

    return (
        <HeaderWrapper $isScrollTop={isScrollTop}>
            <Title>
                <LogoLink href={'/'} onClick={() => setActiveMenu('')}>
                    Julyy.dev<Beta>βeta</Beta>
                </LogoLink>
            </Title>
            <Navigation>
                <SearchButton />
                <ThemeToggleButton />
                <NavigationItem $isActive={activeMenu === 'blog'}>
                    <MenuLink
                        href="/blog"
                        onClick={() => setActiveMenu('blog')}
                    >
                        Blog
                    </MenuLink>
                </NavigationItem>
                <NavigationItem $isActive={activeMenu === 'projects'}>
                    <MenuLink
                        href="/projects"
                        onClick={() => setActiveMenu('projects')}
                    >
                        Projects
                    </MenuLink>
                </NavigationItem>
                <NavigationItem $isActive={activeMenu === 'about'}>
                    <MenuLink
                        href="/about"
                        onClick={() => setActiveMenu('about')}
                    >
                        About
                    </MenuLink>
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
    padding: 0px 40px;
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

interface NavigationItemProps {
    $isActive: boolean;
}

const NavigationItem = styled.div<NavigationItemProps>`
    color: ${props => {
        if (props.$isActive) return '#9980fa';
        else return 'gray';
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
`;
