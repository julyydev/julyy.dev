import getAllPostData from '@/lib/getAllPostData';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
    const props = await getAllPostData();
    // console.log(props);

    return <>{children}</>;
};

export default BlogLayout;
