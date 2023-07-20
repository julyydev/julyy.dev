'use client';
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GlobalStyles from '@/styles/globalStyles';
import { styled } from 'styled-components';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Wrapper>{children}</Wrapper>
            <Footer />
        </>
    );
};

export default MainLayout;

const Wrapper = styled.main`
    display: flex;
    width: 100%;
    min-height: 100vh;
    margin-top: 64px;
`;
