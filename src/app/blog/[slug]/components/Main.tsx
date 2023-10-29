'use client';
import ImageBox from '@/components/ImageBox';
import BlogPostTitle from '@/components/PostTitle';
import TOC from '@/components/TOC';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    oneLight,
    oneDark,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { styled } from 'styled-components';
import notoSansKR from '@/styles/fonts/notoSansKR';
import { PostData } from '@/types/post';
import { Heading } from '@/types/heading';
import { useRecoilValue } from 'recoil';
import { themeState } from '@/recoil/theme';
import Comments from '@/components/Comments';
import React, { useEffect, useState } from 'react';
import InlineCode from '@/components/InlineCode';
import LinkBlock from '@/components/LinkBlock';

interface Props {
    postData: PostData;
    postContent: string;
    headings: Heading[];
}

const Main = (props: Props) => {
    const { postData, postContent, headings } = props;
    const [codeTheme, setCodeTheme] = useState<React.CSSProperties | null>(
        null,
    );

    const theme = useRecoilValue(themeState);

    useEffect(() => {
        if (theme === 'dark') setCodeTheme(() => oneDark);
        else setCodeTheme(() => oneLight);
    }, [theme]);

    return (
        <Container>
            <Wrapper>
                <BlogPostTitle postData={postData}></BlogPostTitle>
                <TOC headings={headings} />
                <Content id="content">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        children={postContent}
                        components={{
                            h1({ children }) {
                                return <h1 id={`${children}`}>{children}</h1>;
                            },
                            h2({ children }) {
                                return <h2 id={`${children}`}>{children}</h2>;
                            },
                            h3({ children }) {
                                return <h3 id={`${children}`}>{children}</h3>;
                            },
                            p({ node, className, children, ...props }) {
                                if (
                                    !('tagName' in node.children[0]) ||
                                    node.children[0].tagName !== 'img'
                                ) {
                                    return (
                                        <p {...props} className={className}>
                                            {children}
                                        </p>
                                    );
                                }
                                const caption =
                                    node.children[0].properties?.alt !== ''
                                        ? (node.children[0].properties
                                              ?.alt as string)
                                        : null;

                                return (
                                    <ImageBox caption={caption}>
                                        {children}
                                    </ImageBox>
                                );
                            },
                            img({ src, alt }) {
                                return (
                                    <Image
                                        src={src as string}
                                        alt={alt as string}
                                        placeholder="blur"
                                        blurDataURL={src}
                                        sizes={'width: 100%'}
                                        width={100}
                                        height={100}
                                        style={{
                                            maxWidth: '100%',
                                            width: 'fit-content',
                                            height: 'fit-content',
                                            boxShadow:
                                                '0 0 10px 1px rgba(0, 0, 0, 0.1)',
                                            borderRadius: '5px',
                                        }}
                                    />
                                );
                            },
                            a({ node, children }) {
                                return (
                                    <LinkBlock
                                        href={node.properties?.href as string}
                                    >
                                        {children}
                                    </LinkBlock>
                                );
                            },
                            pre({ children }) {
                                return <CodeBlock>{children}</CodeBlock>;
                            },
                            code({
                                node,
                                inline,
                                className,
                                children,
                                ...props
                            }) {
                                const match = /language-(\w+)/.exec(
                                    className || '',
                                );

                                if (inline) {
                                    return (
                                        <InlineCode
                                            value={children[0] as string}
                                        />
                                    );
                                }

                                if (codeTheme === null) return <></>;

                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(
                                            /\n$/,
                                            '',
                                        )}
                                        // @ts-ignore
                                        style={codeTheme}
                                        language={match[1]}
                                        PreTag="div"
                                        showLineNumbers
                                        lineNumberStyle={{ marginLeft: -20 }}
                                    />
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </Content>
                <Comments />
            </Wrapper>
        </Container>
    );
};

export default Main;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${notoSansKR.normal.style.fontFamily};
    padding: 0 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    width: 728px;
`;

const Content = styled.div`
    width: çalc(100% - 40px);
`;
