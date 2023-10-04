'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
import LinkWidget from '@/components/common/LinkWidget';
import {
    DoubleDownIcon,
    FileIcon,
    GithubSquareIcon,
    GmailIcon,
    LinkedInIcon,
    WritingHandIcon,
} from '@/assets/svg';
import GalleryWidget from '@/components/common/GalleryWidget';
import Image from 'next/image';
import Image1 from '@/assets/image/gallery/i2.jpeg';
import BuyMeACoffee from '@/assets/image/buy_me_a_coffee.png';
import { themedPalette } from '@/styles/themes';

const Page = () => {
    const [scrollRatio, setScrollRatio] = useState(0);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isDownVisible, setIsDownVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTextVisible(true);
        }, 100);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsDownVisible(true);
        }, 4000);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll =
                window.document.body.scrollHeight - window.innerHeight;
            const ratio = Math.min(scrollTop / maxScroll, 1);
            setScrollRatio(ratio);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (window.scrollY != 0) setIsDownVisible(false);
    }, [window.scrollY]);

    return (
        <Wrapper>
            <TextWrapper scrollRatio={scrollRatio}>
                <JulyyText isVisible={isTextVisible}>Julyy</JulyyText>
                <SubText>
                    <TypeIt>
                        안녕하세요, 정리하는 개발자 Julyy 입니다. 🙂
                    </TypeIt>
                </SubText>
            </TextWrapper>
            <DownAnimation
                isDownVisible={isDownVisible}
                width={60}
                height={60}
                fill={themedPalette.text2}
            />
            <GridWrapper scrollRatio={scrollRatio}>
                <div>
                    <WidgetGrid>
                        <LinkWidget
                            size={[1, 1, 1, 4]}
                            icon={<GithubSquareIcon width={45} height={45} />}
                            title="GitHub"
                            description={`@julyydev`}
                            href={{
                                url: 'https://github.com/julyydev',
                                newTab: true,
                            }}
                        >
                            <img
                                src="https://ghchart.rshah.org/julyydev"
                                alt={'github'}
                            />
                        </LinkWidget>
                        <LinkWidget
                            size={[2, 1, 1, 1]}
                            icon={<WritingHandIcon width={30} height={30} />}
                            title="Blog"
                            description="/blog"
                            href={{
                                url: '/blog',
                            }}
                        />
                        <LinkWidget
                            size={[2, 2, 1, 1]}
                            icon={<FileIcon width={27} height={27} />}
                            title="Resume"
                            description="/resume"
                            href={{
                                url: '/resume',
                            }}
                        ></LinkWidget>
                        <GalleryWidget size={[2, 3, 2, 2]} title="23.01.USA.">
                            <Image
                                src={Image1}
                                alt="1"
                                width={390}
                                height={390}
                            />
                        </GalleryWidget>
                        <LinkWidget
                            size={[3, 1, 1, 1]}
                            icon={<GmailIcon width={30} height={30} />}
                            title="Mail"
                            description="kjyjykwak@gmail.com"
                        />
                        <LinkWidget
                            size={[3, 2, 1, 1]}
                            icon={<LinkedInIcon />}
                            title="LinkedIn"
                            description="@julyy"
                            href={{
                                url: 'https://www.linkedin.com/in/julyy/',
                                newTab: true,
                            }}
                            color={'#F0F6F9'}
                        />
                        <LinkWidget
                            size={[4, 4, 1, 1]}
                            icon={
                                <Image
                                    src={BuyMeACoffee}
                                    alt={'buy me a coffee'}
                                    width={40}
                                    height={40}
                                />
                            }
                            title="Buy me a coffee"
                            description="@julyydev"
                            href={{
                                url: 'https://www.buymeacoffee.com/julyydev',
                                newTab: true,
                            }}
                            color={'#fdfaf3'}
                        />
                        <LinkWidget size={[4, 1, 1, 3]} />
                    </WidgetGrid>
                </div>
            </GridWrapper>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 5000px;
    overflow-y: scroll;
    top: 0;
    left: 0;
`;

interface ScrollProps {
    scrollRatio: number;
}

const TextWrapper = styled.div<ScrollProps>`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 300px;
    position: fixed;
    left: ${props => {
        if (props.scrollRatio < 0.25) return `${50 - props.scrollRatio * 120}%`;
        else return '20%';
    }};
    top: 40%;
    transform: translate(-50%, -50%);
    transition: left 1s ease-out, top 0.5s ease-out;
    color: black;
    z-index: 300;
    justify-content: center;
    align-items: center;
`;

interface TextProps {
    isVisible: boolean;
}

const JulyyText = styled.h3<TextProps>`
    opacity: ${props => (props.isVisible ? '1' : '0')};
    transition: opacity 0.5s ease-in-out;
    font-size: 64px;
    color: ${themedPalette.text1};
`;

const SubText = styled.div`
    font-size: 24px;
    color: ${themedPalette.text2};
`;

const GridWrapper = styled.div<ScrollProps>`
    width: 900px;
    height: fit-content;
    position: fixed;
    top: ${props => {
        if (props.scrollRatio < 0.6) return '64px';
        else if (props.scrollRatio < 0.8)
            return `calc(64px + ${
                props.scrollRatio - 0.6
            } * 5 * (-820px + 100vh - 192px))`;
        else return `calc(-820px + 100vh - 192px)`;
    }};
    right: ${props => {
        if (props.scrollRatio < 0.25)
            return `${-900 + props.scrollRatio * 4000}px`;
        else return '100px';
    }};
    transition: right 1s ease-out, top 0.5s ease-out;
`;

const WidgetGrid = styled.div`
    width: 820px;
    height: 820px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    overflow-y: scroll;
    grid-gap: 40px;
    padding: 40px;
`;

interface DownAnimationProps {
    isDownVisible: boolean;
}

const DownAnimation = styled(DoubleDownIcon)<DownAnimationProps>`
    display: ${props => {
        if (!props.isDownVisible) return 'none';
    }};
    position: fixed;
    bottom: 200px;
    animation: blink 1s infinite;

    @keyframes blink {
        0% {
            opacity: 0.1;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.1;
        }
    }
`;
