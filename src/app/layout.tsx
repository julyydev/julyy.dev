import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import StyledComponentsRegistry from '@/lib/registry/styledComponents';
import Recoil from '@/lib/registry/recoil';

export const metadata: Metadata = {
    title: 'Julyy.dev',
    description: 'Julyy의 기술 블로그',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Recoil>
                    <StyledComponentsRegistry>
                        <MainLayout>{children}</MainLayout>
                    </StyledComponentsRegistry>
                </Recoil>
            </body>
        </html>
    );
};

export default RootLayout;