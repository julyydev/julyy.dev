import { cache } from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Heading } from '@/types/heading';
import { PostData } from '@/types/post';

const getPostDataBySlug = cache(async (slug: string) => {
    const postsDirectory = path.join(process.cwd(), 'src/assets/md');
    const fullPath = path.join(postsDirectory, `${slug}.md`);

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
        postData: processedMD.data as PostData,
        postContent: processedMD.content,
        headings,
    };
});

export default getPostDataBySlug;
