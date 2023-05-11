import { themedPalette } from '@/styles/themes';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { SunIcon, MoonIcon } from '../assets/svg';
import { useState } from 'react';

const ThemeToggleButton = () => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        if (document.querySelector('body')?.dataset.theme === 'dark')
            document.querySelector('body')?.setAttribute('data-theme', 'light');
        else document.querySelector('body')?.setAttribute('data-theme', 'dark');
        setIsDark(prev => !prev);
    };

    const transitions = useTransition(isDark, {
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
    color: #ffbc2e;
    svg {
        display: block;
    }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeToggleButton;
