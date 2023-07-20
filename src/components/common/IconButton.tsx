import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';
import React from 'react';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

const IconButton = (props: Props) => {
    const { children, onClick } = props;
    return (
        <Button onClick={onClick}>
            <Positioner>
                <SVGWrapper>{children}</SVGWrapper>
            </Positioner>
        </Button>
    );
};

const Button = styled.button`
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
    svg {
        display: block;
    }
`;

export default IconButton;
