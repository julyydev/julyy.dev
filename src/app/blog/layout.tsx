import React from 'react';
import SearchButton from '@/components/SearchButton';
import SideMenu from '@/components/SideMenu';
import getAllPostData from '@/lib/getAllPostData';

export const dynamic = 'force-static';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
    const { postDataList } = await getAllPostData();

    return (
        <>
            <SideMenu totalPostNumber={postDataList.length} />
            <SearchButton postDataList={postDataList} />
            {children}
        </>
    );
};

export default BlogLayout;
