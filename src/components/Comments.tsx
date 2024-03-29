import { themeState } from '@/recoil/theme';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Divider from './common/Divider';
import { themedPalette } from '@/styles/themes';
import styled from 'styled-components';

const Comments = () => {
    const [commentsElement, setCommentsElement] = useState<Element | null>(
        null,
    );
    const theme = useRecoilValue(themeState);

    const commentsTheme = () => {
        if (theme === 'dark') return 'github-dark';
        else return 'github-light';
    };

    useEffect(() => {
        return () => {
            const style = document.head.getElementsByTagName('style')[0];
            if (style.innerHTML.includes('utterances')) {
                style.remove();
            }
        };
    }, []);

    useEffect(() => {
        if (!commentsElement) return;

        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://utteranc.es/client.js';
        scriptElement.async = true;
        scriptElement.setAttribute('repo', 'julyydev/blog-comments');
        scriptElement.setAttribute('issue-term', 'pathname');
        scriptElement.setAttribute('label', 'comment');
        scriptElement.setAttribute('theme', commentsTheme());
        scriptElement.setAttribute('crossorigin', 'anonymous');
        commentsElement.appendChild(scriptElement);
    }, [commentsElement]);

    useEffect(() => {
        if (!commentsElement) return;

        const message = {
            type: 'set-theme',
            theme: commentsTheme(),
        };
        const commentIframe = commentsElement.querySelector('iframe');

        commentIframe?.contentWindow?.postMessage(
            message,
            'https://utteranc.es',
        );
    }, [theme]);

    return (
        <>
            <Divider width="100%" color={themedPalette.text4} />
            <Wrapper ref={setCommentsElement} />
        </>
    );
};

export default Comments;

const Wrapper = styled.div`
    width: 100%;
`;
