import { Heading } from '@/types/heading';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { themedPalette } from '@/styles/themes';
import { ArrowTurnUpIcon, CommentIcon, ShareIcon } from '@/assets/svg';
import IconButton from '@/components/common/IconButton';

interface Props {
    headings: Heading[];
}

const TOC = (props: Props) => {
    const { headings } = props;
    const headingIds = headings.map(heading => heading.id);
    const [currentHeadingId, setCurrentHeadingId] = useState<string>('');

    useEffect(() => {
        const headingElements = (
            document.getElementById('content') as HTMLElement
        ).querySelectorAll('h1, h2, h3');

        const visibleHadingIds: string[] = [];
        const intersectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    visibleHadingIds.push(entry.target.id);
                } else {
                    const index = visibleHadingIds.indexOf(entry.target.id);
                    if (index > -1) visibleHadingIds.splice(index, 1);
                }
                if (visibleHadingIds.length == 1)
                    setCurrentHeadingId(visibleHadingIds[0]);
                else if (visibleHadingIds.length > 1) {
                    visibleHadingIds.sort(
                        (a, b) => headingIds.indexOf(a) - headingIds.indexOf(b),
                    );
                    setCurrentHeadingId(visibleHadingIds[0]);
                }
            });
        });

        headingElements.forEach(headingElement => {
            intersectionObserver.observe(headingElement);
        });

        return () => intersectionObserver.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 부드러운 스크롤을 위해 behavior를 "smooth"로 설정합니다.
        });
    };

    // 스크롤을 맨 아래로 이동하는 함수
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <Wrapper>
            <Title>On This Page</Title>
            {headings.map(heading => {
                return (
                    <HeadingButton
                        key={heading.id}
                        onClick={() => {
                            location.href = `#${heading.id}`;
                        }}
                        tag={heading.tag}
                        $isFocus={currentHeadingId === heading.id}
                    >
                        {heading.value}
                    </HeadingButton>
                );
            })}
            <ButtonGroup>
                <IconButton>
                    <ShareIcon
                        fill={themedPalette.text3}
                        width={20}
                        height={20}
                    />
                </IconButton>
                <IconButton onClick={() => scrollToTop()}>
                    <ArrowTurnUpIcon
                        fill={themedPalette.text3}
                        width={20}
                        height={20}
                    />
                </IconButton>
                <IconButton onClick={() => scrollToBottom()}>
                    <CommentIcon
                        fill={themedPalette.text3}
                        width={20}
                        height={20}
                    />
                </IconButton>
            </ButtonGroup>
        </Wrapper>
    );
};

export default TOC;

const Wrapper = styled.aside`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 200px;
    margin-right: 100px;
    color: #bbb9b9;
    font-size: 14px;
    border: 1px solid ${themedPalette.text4};
    border-radius: 15px;
    padding: 10px;
`;

const Title = styled.div`
    color: ${themedPalette.text2};
    border-bottom: 1px solid ${themedPalette.text4};
    padding-bottom: 10px;
    padding-left: 10px;
`;

interface HeadingButtonProps {
    tag: string;
    $isFocus: boolean;
}

const HeadingButton = styled.div<HeadingButtonProps>`
    color: ${props => {
        if (props.$isFocus) return themedPalette.primary_700;
        else return '#bbb9b9';
    }};
    margin: 10px 0;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: ${props => {
        if (props.tag === 'h2') return '20px';
        else if (props.tag === 'h3') return '30px';
        return '10px';
    }};
    background-color: ${props => {
        if (props.$isFocus) return themedPalette.primary_100;
    }};
    border-radius: 7px;
    transition: background-color 0.5s, color 0.5s;

    &:hover {
        color: ${themedPalette.primary_700};
        font-weight: bold;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;

    button:first-child {
        margin-right: auto;
    }
`;
