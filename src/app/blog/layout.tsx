import SearchButton from '@/components/SearchButton';
import getAllPostData from '@/lib/getAllPostData';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
    const { postDataList } = await getAllPostData();

    return (
        <>
            <SearchButton postDataList={postDataList} />
            {children}
        </>
    );
};

export default BlogLayout;
