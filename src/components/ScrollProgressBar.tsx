import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';

const ScrollProgressBar = () => {
    const [width, setWidth] = useState<number>(0);
    const progressRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback((): void => {
        const { scrollTop, scrollHeight, clientHeight } =
            document.documentElement;

        if (scrollTop === 0) {
            setWidth(0);
            return;
        }

        setWidth((scrollTop / (scrollHeight - clientHeight)) * 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [handleScroll]);

    return (
        <Wrapper ref={progressRef}>
            <Progress width={width}></Progress>
        </Wrapper>
    );
};

export default ScrollProgressBar;

const Wrapper = styled.div`
    width: 100%;
    height: 3px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

interface ProgressProps {
    width: number;
}

const Progress = styled.div<ProgressProps>`
    width: ${props => {
        return props.width + '%';
    }};
    height: 100%;
    background-image: linear-gradient(
        90deg,
        ${themedPalette.warning_500},
        ${themedPalette.primary_500}
    );
    border-radius: 50px;
`;
