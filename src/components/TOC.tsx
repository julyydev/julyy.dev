import { Heading } from '@/types/heading';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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

    return (
        <Wrapper>
            <Title>목차</Title>
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
        </Wrapper>
    );
};

export default TOC;

const Wrapper = styled.aside`
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    /* border-left: 2px solid #bbb9b9; */
    padding-left: 10px;
    width: 200px;
    height: 400px;
    margin-right: 100px;
    color: #bbb9b9;
    font-size: 14px;
`;

const Title = styled.div`
    color: #bbb9b9;
    border-bottom: 1px solid #bbb9b9;
    padding-bottom: 10px;
    padding-left: 10px;
`;

interface HeadingButtonProps {
    tag: string;
    $isFocus: boolean;
}

const HeadingButton = styled.div<HeadingButtonProps>`
    color: ${props => {
        if (props.$isFocus) return 'black';
        else return '#bbb9b9';
    }};
    margin: 10px 0px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: ${props => {
        if (props.tag === 'h2') return '20px';
        else if (props.tag === 'h3') return '30px';
        return '10px';
    }};
    background-color: ${props => {
        if (props.$isFocus) return '#eaeaea';
    }};
    border-left: ${props => {
        if (props.$isFocus) return '4px solid #9980fa';
    }};
    transition: background-color 0.5s, color 0.5s;

    &:hover {
        color: #9980fa;
        font-weight: bold;
    }
`;
