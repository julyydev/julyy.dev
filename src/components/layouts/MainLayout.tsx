import { ReactElement } from 'react';
import Footer from '../Footer';
import Header from '../Header';

const MainLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
