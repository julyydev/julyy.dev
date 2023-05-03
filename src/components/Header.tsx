import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggleButton from './ThemeToggleButton';
import { themedPalette } from '@/styles/themes';
import SearchButton from './SearchButton';
import { Pacifico } from '@next/font/google';
import { notoSansKR } from '@/styles/fonts/notoSansKR';
import useActiveMenu from '@/hooks/useActiveMenu';

const Header = () => {
    const { activeMenu, setActiveMenu } = useActiveMenu();

    return (
        <HeaderWrapper>
            <Title>
                <LogoLink href={'/'} onClick={() => setActiveMenu('')}>
                    Julyy.dev<Beta>βeta</Beta>
                </LogoLink>
            </Title>
            <Navigation>
                <SearchButton />
                <ThemeToggleButton />
                <NavigationItem isActive={activeMenu === 'blog'}>
                    <MenuLink
                        href="/blog"
                        onClick={() => setActiveMenu('blog')}
                    >
                        Blog
                    </MenuLink>
                </NavigationItem>
                <NavigationItem isActive={activeMenu === 'projects'}>
                    <MenuLink
                        href="/projects"
                        onClick={() => setActiveMenu('projects')}
                    >
                        Projects
                    </MenuLink>
                </NavigationItem>
                <NavigationItem isActive={activeMenu === 'about'}>
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

const HeaderWrapper = styled.header`
    background-color: ${themedPalette.bg_page1};
    color: ${themedPalette.text1};
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-family: ${notoSansKR.style.fontFamily};
`;

const Title = styled.h1`
    font-family: ${font.style.fontFamily};
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

interface NavigationItemProps {
    isActive: boolean;
}

const NavigationItem = styled.div<NavigationItemProps>`
    /* color: ${themedPalette.text1}; */
    color: ${props => {
        if (props.isActive) return '#9980fa';
        else return 'gray';
    }};
    font-size: 16px;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
        color: black;
        text-decoration: underline;
    }
`;
