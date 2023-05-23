import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import StyledComponentsRegistry from '@/lib/styled-components/registry';

export const metadata: Metadata = {
    title: 'Julyy.dev',
    description: 'Julyy의 기술 블로그',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <MainLayout>{children}</MainLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
};

export default RootLayout;
