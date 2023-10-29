import { styled } from 'styled-components';
import { themedPalette } from '@/styles/themes';
import React, { useEffect, useState } from 'react';

type Size = [number, number, number, number];

interface Props {
    size: Size;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    href?: { url: string; newTab?: boolean };
    color?: string;
}

const LinkWidget = (props: Props) => {
    const { size, icon, title, description, children, href, color } = props;

    const handleClick = () => {
        if (href === undefined) return;
        if (href.newTab) window.open(href.url);
        else window.location.href = href.url;
    };

    return (
        <Wrapper size={size} color={color} onClick={handleClick}>
            <Info>
                <Icon>{icon}</Icon>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
            </Info>
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default LinkWidget;

interface WrapperProps {
    size: Size;
    color?: string;
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
    background-color: ${props => {
        if (props.color === undefined) return themedPalette.bg_page2;
        else return props.color;
    }};

    transition: opacity 0.5s ease-in-out;

    &:hover {
        box-shadow: 0 8px 8px ${themedPalette.shadow};
        transform: rotate(2deg);
        animation: shake 0.3s ease-in-out infinite;
        cursor: pointer;
    }

    @keyframes shake {
        0%,
        100% {
            transform: rotate(1deg);
        }
        50% {
            transform: rotate(-1deg);
        }
    }
`;

const Info = styled.div`
    width: 130px;
`;

const Icon = styled.div`
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${themedPalette.text4};
    border-radius: 10px;
    position: relative;
    left: 20px;
    top: 20px;
`;

const Title = styled.div`
    font-size: 14px;
    position: relative;
    left: 20px;
    top: 35px;
`;

const SubTitle = styled.div`
    font-size: 12px;
    position: relative;
    left: 20px;
    top: 35px;
    color: ${themedPalette.text3};
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
