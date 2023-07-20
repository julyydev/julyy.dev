import { themedPalette } from '@/styles/themes';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { SunIcon, MoonIcon } from '../assets/svg';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useRecoilState(themeState);
    const [mounted, setMounted] = useState<boolean>(false);
    const toggleTheme = () => {
        if (document.querySelector('body')?.dataset.theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.querySelector('body')?.setAttribute('data-theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.querySelector('body')?.setAttribute('data-theme', 'dark');
        }
    };

    const transitions = useTransition(theme === 'dark', {
        initial: {
            transform: 'scale(1) rotate(0deg)',
            opacity: 1,
        },
        from: {
            transform: 'scale(0) rotate(-180deg)',
            opacity: 0,
        },
        enter: {
            transform: 'scale(1) rotate(0deg)',
            opacity: 1,
        },
        leave: {
            transform: 'scale(0) rotate(180deg)',
            opacity: 0,
        },

        reverse: true,
    });

    useEffect(() => {
        setMounted(() => true);
    }, []);

    if (!mounted) return <></>;

    return (
        <IconButton onClick={toggleTheme}>
            {transitions((style, item) =>
                item ? (
                    <Positioner>
                        <AnimatedSVGWrapper style={style}>
                            <MoonIcon />
                        </AnimatedSVGWrapper>
                    </Positioner>
                ) : (
                    <Positioner>
                        <AnimatedSVGWrapper style={style}>
                            <SunIcon />
                        </AnimatedSVGWrapper>
                    </Positioner>
                ),
            )}
        </IconButton>
    );
};

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.25rem;
    position: relative;
    &:hover {
        background: ${themedPalette.slight_layer};
        border: 2px solid ${themedPalette.slight_layer};
    }
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
    color: ${themedPalette.warning_500};
    svg {
        display: block;
    }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeToggleButton;
