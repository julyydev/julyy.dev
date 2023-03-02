// import '@/styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/layouts/MainLayout';
import GlobalStyles from '@/styles/globalStyles';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);
    return getLayout(
        <>
            <GlobalStyles />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>,
    );
}
