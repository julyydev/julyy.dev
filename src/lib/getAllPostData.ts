import { cache } from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { PostData } from '@/types/post';

const getAllPostData = cache(async () => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');
    let totalPostNumber = 0;
    const files = fs.readdirSync(postsDirectory);
    const postDataList = files.map(file => {
        const rawMD = fs.readFileSync(postsDirectory + '/' + file, 'utf8');
        const processedMD = matter(rawMD);
        totalPostNumber++;
        return processedMD.data;
    });
    const data = { postDataList: postDataList as PostData[], totalPostNumber };
    return data;
});

export default getAllPostData;
