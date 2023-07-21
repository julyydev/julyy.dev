import notoSansKR from '@/styles/fonts/notoSansKR';
import styled from 'styled-components';
import { ClipboardIcon, CheckIcon } from '../assets/svg';
import { useEffect, useState } from 'react';
import { themedPalette } from '@/styles/themes';

interface Props {
    children: any;
}

const CodeBlock = (props: Props) => {
    const { children } = props;
    const codeString = children[0].props.children[0];
    const match = children[0].props.className.match(/^language-(.*)$/);
    const language = match ? match[1] : null;

    return (
        <Wrapper>
            <TopBar language={language} codeString={codeString} />
            <CodeWrapper>{children}</CodeWrapper>
        </Wrapper>
    );
};

export default CodeBlock;

interface TopBarProps {
    language: string | null;
    codeString: string;
}

const TopBar = (props: TopBarProps) => {
    const { language, codeString } = props;
    const [isCopied, setIsCopied] = useState<boolean>(false);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [isCopied]);

    const handleCopyClipBoard = async (text: string) => {
        if (!isCopied) {
            try {
                await navigator.clipboard.writeText(text);
                setIsCopied(true);
            } catch (error) {
                alert('알 수 없는 이유로 클립보드 복사에 실패하였습니다.');
            }
        }
    };

    return (
        <TopBarWrapper>
            <CircleWrapper>
                <Circle color="red" />
                <Circle color="yellow" />
                <Circle color="green" />
            </CircleWrapper>
            <Language>{language}</Language>
            <RightWrapper>
                <CopyButton onClick={() => handleCopyClipBoard(codeString)}>
                    {isCopied ? (
                        <CheckIcon width={16} height={16} fill="#FFBC2E" />
                    ) : (
                        <ClipboardIcon width={16} height={16} fill="#FFBC2E" />
                    )}
                    {isCopied ? (
                        <CopyText>Copied!</CopyText>
                    ) : (
                        <CopyText>Copy code</CopyText>
                    )}
                </CopyButton>
            </RightWrapper>
        </TopBarWrapper>
    );
};

const Wrapper = styled.pre`
    width: 100%;
    font-family: ${notoSansKR.normal.style.fontFamily};
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
`;

const CodeWrapper = styled.div`
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 5px;
    font-size: 14px;
`;

const TopBarWrapper = styled.div`
    background-color: ${themedPalette.code_block_wrapper};
    width: 100%;
    height: 40px;
    margin-bottom: -12px;
    position: relative;
    border-radius: 5px 5px 0 0;
`;

const CircleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 55px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 15px;
`;

interface CircleProps {
    color: 'red' | 'yellow' | 'green';
}

const Circle = styled.div<CircleProps>`
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background-color: ${props => {
        if (props.color == 'red') return '#FF6057';
        else if (props.color == 'yellow') return '#FFBC2E';
        else return '#28C840';
    }};
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    margin-right: 10px;
`;

const Language = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 90px;
    color: ${themedPalette.warning_500};
    font-size: 14px;
`;

const CopyText = styled.div`
    color: ${themedPalette.warning_500};
    font-size: 12px;
    margin-left: 5px;
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`;
