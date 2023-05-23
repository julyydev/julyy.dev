'use client';
import ImageBox from '@/components/ImageBox';
import BlogPostTitle from '@/components/PostTitle';
import SideMenu from '@/components/SideMenu';
import TOC from '@/components/TOC';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import CodeBlock from '@/components/CodeBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { styled } from 'styled-components';
import { notoSansKR } from '@/styles/fonts/notoSansKR';
import { PostData } from '@/types/post';
import { Heading } from '@/types/heading';

interface Props {
    postData: PostData;
    postContent: string;
    headings: Heading[];
}

const Main = (props: Props) => {
    const { postData, postContent, headings } = props;
    return (
        <>
            <SideMenu />
            <Container>
                <BlogPostTitle postData={postData}></BlogPostTitle>
                <TOC headings={headings} />
                <div id="content">
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
                                        sizes="100vw"
                                        width={100}
                                        height={100}
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            borderRadius: '5px',
                                        }}
                                    />
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
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        {...props}
                                        children={String(children).replace(
                                            /\n$/,
                                            '',
                                        )}
                                        style={oneDark}
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
                </div>
            </Container>
        </>
    );
};

export default Main;

const Container = styled.div`
    width: 40%;
    margin: 0 30%;
    font-family: ${notoSansKR.style.fontFamily};
    /* font-size: 1.125rem; */
`;
