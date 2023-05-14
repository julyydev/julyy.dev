import { ReactElement } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styled from 'styled-components';

const MainLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
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
