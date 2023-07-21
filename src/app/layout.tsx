import React from 'react';
import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import StyledComponentsRegistry from '@/lib/registry/styledComponents';
import Recoil from '@/lib/registry/recoil';

export const metadata: Metadata = {
    title: 'Julyy.dev',
    description: 'Julyy의 기술 블로그',
};

const ThemeScript = () => {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    const theme = localStorage.getItem("theme");
                    document.body.dataset.theme = theme;
                    console.log(theme);
                `,
            }}
        ></script>
    );
};

export const dynamic = 'force-static';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeScript />
                <Recoil>
                    <StyledComponentsRegistry>
                        <MainLayout>{children}</MainLayout>
                    </StyledComponentsRegistry>
                </Recoil>
                <div id="portal"></div>
            </body>
        </html>
    );
};

export default RootLayout;
