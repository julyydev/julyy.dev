'use client';
import TypeIt from 'typeit-react';
import styled from 'styled-components';
import { Nanum_Brush_Script } from 'next/font/google';

const Page = () => {
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

const inter = Nanum_Brush_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'fallback',
});

const Wrapper = styled.div`
    width: 100%;
    font-size: 40px;
    display: flex;
    justify-content: center;
    font-family: ${inter.style.fontFamily};
`;
