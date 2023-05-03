import { GetStaticProps, GetStaticPropsContext } from 'next';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import rehypeRaw from 'rehype-raw';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import { PostData } from '@/types/post';
import BlogPostTitle from '@/components/PostTitle';
import { notoSansKR } from '@/styles/fonts/notoSansKR';
import { marked } from 'marked';
import TOC from '@/components/TOC';
import { Heading } from '@/types/heading';
import Head from 'next/head';
import CodeBlock from '@/components/CodeBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
    postData: PostData;
    postContent: string;
    headings: Heading[];
}

const Post = (props: Props) => {
    const { postData, postContent, headings } = props;

    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <meta
                    property="og:title"
                    content={postData.title ? postData.title : 'default title'}
                />
                <meta property="og:image" content={postData.thumbnail} />
                <meta property="og:description" content={postData.summary} />
            </Head>
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

export default Post;

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext,
) => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');
    const fullPath = path.join(postsDirectory, `${context.params?.slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return {
            notFound: true,
        };
    }

    const rawMD = fs.readFileSync(fullPath, 'utf8');
    const processedMD = matter(rawMD);

    const headings: Heading[] = [];
    marked
        .parse(processedMD.content)
        .split('\n')
        .forEach(str => {
            const match = str.match(
                /<(h[1-3])\s+[^>]*id="([^"]+)"[^>]*>([^<]+)<\/\1>/,
            );
            if (match)
                headings.push({ tag: match[1], id: match[2], value: match[3] });
        });

    return {
        props: {
            postData: processedMD.data,
            postContent: processedMD.content,
            headings,
        },
    };
};

const Container = styled.div`
    width: 40%;
    margin: 0 30%;
    font-family: ${notoSansKR.style.fontFamily};
    /* font-size: 1.125rem; */
`;
