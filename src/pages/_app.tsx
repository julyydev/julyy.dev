// import '@/styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/layouts/MainLayout';
import GlobalStyles from '@/styles/globalStyles';
import Head from 'next/head';

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
            <Head>
                <title>Julyy.dev</title>
            </Head>
            <GlobalStyles />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>,
    );
}
