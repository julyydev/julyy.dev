import { styled } from 'styled-components';
import { themedPalette } from '@/styles/themes';
import React, { useEffect, useState } from 'react';
import { Dancing_Script, Nanum_Brush_Script } from 'next/font/google';
import { LeftAngleIcon, RightAngleIcon } from '@/assets/svg';

type Size = [number, number, number, number];

interface Props {
    size: Size;
    title?: string;
    children?: React.ReactNode;
}
const GalleryWidget = (props: Props) => {
    const { size, title, children } = props;

    return (
        <Wrapper size={size}>
            <Title>{title}</Title>
            <LeftAngle width={30} height={30} fill={'#ffffff'}></LeftAngle>
            <RightAngle width={30} height={30} fill={'#ffffff'}></RightAngle>
            {children}
        </Wrapper>
    );
};

export default GalleryWidget;

interface WrapperProps {
    size: Size;
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    border: 1px solid ${themedPalette.text4};
    border-radius: 20px;
    grid-column: ${props => {
        return `${props.size[1]} / ${props.size[1] + props.size[3]}`;
    }};
    grid-row: ${props => {
        return `${props.size[0]} / ${props.size[0] + props.size[2]}`;
    }};
    overflow: hidden;
    position: relative;

    transition: opacity 0.5s ease-in-out;
`;

const dancingScript = Dancing_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const Title = styled.div`
    position: absolute;
    margin-left: 15px;
    margin-top: 15px;
    color: #f8f9fa;
    font-size: 30px;
    font-family: ${dancingScript.style.fontFamily};
`;

const LeftAngle = styled(LeftAngleIcon)`
    position: absolute;
    top: 50%;
`;

const RightAngle = styled(RightAngleIcon)`
    position: absolute;
    right: 0;
    top: 50%;
`;
