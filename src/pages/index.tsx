import Head from 'next/head';
import Image from 'next/image';
import {
    Inter,
    Nanum_Brush_Script,
    Nanum_Gothic_Coding,
} from '@next/font/google';
import type { NextPageWithLayout } from './_app';
import TypeIt from 'typeit-react';
import styled from 'styled-components';

const inter = Nanum_Brush_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const Page: NextPageWithLayout = () => {
    return (
        <Wrapper>
            <TypeIt
                getBeforeInit={instance => {
                    instance
                        .type('안녕하세요, Julyy 입니다.')
                        .pause(750)
                        .delete(1)
                        .pause(500)
                        .type('!');

                    return instance;
                }}
            />
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.div`
    font-family: ${inter.style.fontFamily};
    font-size: 40px;
    display: flex;
    justify-content: center;
`;
