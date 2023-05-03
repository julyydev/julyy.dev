---
title: 테스트-md3
summary: asjkd lkasdjla klasjkajdaksjd
slug: test-copy3
date: 2023. 3. 2.
category: bbb
series:
tag:
    - Notion
    - Github
thumbnail: https://s3.ap-northeast-2.amazonaws.com/julyy.dev/test-md_0.png
---

# 제목1

## 제목2

### 제목3

---

<u>~~_**`테스트`**_~~</u>

<br>

<br>

<br>

<br>

<span style="background-color: #f1f1ef">테스트</span>

<span style="color: #d34e49">테스트</span>

<span style="background-color: #fdebec">테스트</span>

**Lorem ipsum** _dolor sit amet_, <u>consectetur adipisicing</u> elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. `Ut enim ad minim` veniam, quis nostrud exercitation ullamco laboris <span style="color: #d34e49">nisi ut aliquip ex ea</span> commodo consequat. <span style="background-color: #edf3ec">Duis aute irure</span> dolor in reprehenderit in ~~voluptate velit esse~~ cillum<span style="color: #3a80ab"> dolore eu fugiat</span> nulla pariatur. Excepteur sint occaecat cupidatat non proident, [<span style="color: #458261"><u>~~_**`sunt in culpa qui`**_~~</u></span>](https://github.com/julyydev) officia deserunt mollit anim id est laborum.

table(미구현)

-   [x] 체크박스

-   [ ] 안체크박스

<br>

-   글머리기호호

-   글머리기호

    -   글머리기호2

        -   글머리기호3

1.  번호1

1.  번호2

    1.  번호a

        1.  번호i

<details>
<summary>토글</summary>
<div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>
</div>
</details>

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

<aside>
💡 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</aside>

😇

equation(미구현)

![캡션 테스트](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/test-md_1.png)

<br>

![강아지!!](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/test-md_2.png)

[내 깃허브](https://github.com/julyydev)

bookmark(미구현)

```typescript
import { notoSansKR } from '@/styles/fonts/notoSansKR';
import styled from 'styled-components';
import ClipboardIcon from '../assets/svg/icon_clipboard.svg';
import CheckIcon from '../assets/svg/icon_check.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
                        <Icon src={CheckIcon} alt="clipboard" />
                    ) : (
                        <Icon src={ClipboardIcon} alt="clipboard" />
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
    font-family: ${notoSansKR.style.fontFamily};
`;

const CodeWrapper = styled.div`
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 5px;
    font-size: 14px;
`;

const TopBarWrapper = styled.div`
    background-color: #393b46;
    width: 100%;
    height: 40px;
    margin-bottom: -12px;
    position: relative;
    border-radius: 5px 5px 0px 0px;
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

const LeftWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 90px;
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0, -50%);
    margin-right: 10px;
`;

const Language = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    margin-left: 90px;
    color: #ffbc2e;
    font-size: 14px;
`;

const Icon = styled(Image)`
    width: 16px;
    height: 16px;
`;

const CopyText = styled.div`
    color: #ffbc2e;
    font-size: 12px;
    margin-left: 5px;
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
`;
```

<br>
