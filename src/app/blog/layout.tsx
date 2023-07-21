import React, { Suspense } from 'react';
import SearchButton from '@/components/SearchButton';
import SideMenu from '@/components/SideMenu';
import getAllPostData from '@/lib/getAllPostData';

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
    const { postDataList } = await getAllPostData();

    return (
        <>
            <Suspense>
                <SideMenu totalPostNumber={postDataList.length} />
            </Suspense>
            <SearchButton postDataList={postDataList} />
            {children}
        </>
    );
};

export default BlogLayout;
