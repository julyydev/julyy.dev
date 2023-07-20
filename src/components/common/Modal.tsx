import { themedPalette } from '@/styles/themes';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
    const handleClickContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return isOpen ? (
        <ModalPortal>
            <Background onClick={onClose}>
                <Wrapper onClick={handleClickContent}>{children}</Wrapper>
            </Background>
        </ModalPortal>
    ) : (
        <></>
    );
};

export default Modal;

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
    const [ready, setReady] = useState<boolean>(false);
    useEffect(() => {
        setReady(true);
    });
    const element = document.getElementById('portal') as HTMLElement;

    return ready ? createPortal(children, element) : null;
};

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(52, 58, 70, 0.8);
    overflow: hidden;
`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${themedPalette.bg_page1};
    border-radius: 10px;
`;
