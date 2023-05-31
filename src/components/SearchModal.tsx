import { styled } from 'styled-components';
import Divider from './common/Divider';
import { themedPalette } from '@/styles/themes';
import useInput from '@/hooks/useInput';
import { RemoveIcon, SearchIcon } from '@/assets/svg';
import { useEffect, useState } from 'react';
import nanumGothic from '@/styles/fonts/nanumGothic';
import { PostData } from '@/types/post';
import SearchResultPost from './SearchResultPost';
import { useRouter } from 'next/navigation';

interface Props {
    postDataList: PostData[];
    onClose: () => void;
}

const SearchModal = (props: Props) => {
    const { postDataList, onClose } = props;
    const { value, onChange, onReset } = useInput();
    const [focusIndex, setFocusIndex] = useState<number>(-1);
    const router = useRouter();

    const filteredPostDataList = postDataList.filter(postData => {
        return new RegExp(value).test(postData.title);
    });

    useEffect(() => {
        setFocusIndex(-1);
    }, [value]);

    const scrollToFocusItem = () => {
        const selectedItem = document.getElementById(
            `searchResultItem_${focusIndex}`,
        );

        if (selectedItem) {
            selectedItem.scrollIntoView({
                behavior: 'instant',
                block: 'center',
            });
        }
    };

    const navigateToFocus = () => {
        onClose();
        router.push(`/blog/${filteredPostDataList[focusIndex].slug}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        else if (e.key === 'ArrowUp') {
            if (focusIndex > -1) {
                setFocusIndex(prev => prev - 1);
                scrollToFocusItem();
            }
        } else if (e.key === 'ArrowDown') {
            if (focusIndex < filteredPostDataList.length - 1) {
                setFocusIndex(prev => prev + 1);
                scrollToFocusItem();
            }
        } else if (e.key === 'Enter') {
            if (focusIndex > -1) {
                navigateToFocus();
            }
        }
    };

    const preventInputKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
    };

    return (
        <Wrapper onKeyDown={handleKeyPress}>
            <SearchBox>
                <SearchIcon width={15} height={15} fill="gray" />
                <SearchInput
                    onChange={onChange}
                    value={value}
                    placeholder="키워드를 입력하세요"
                    autoFocus
                    onKeyDown={preventInputKeyPress}
                />
                {value !== '' && (
                    <RemoveIcon
                        width={20}
                        height={20}
                        fill="gray"
                        onClick={onReset}
                    />
                )}
            </SearchBox>
            <SearchResult>
                {filteredPostDataList.length === 0 || value === '' ? (
                    <NoResult>검색 결과가 없습니다</NoResult>
                ) : (
                    <>
                        {filteredPostDataList.map((postData, index) => (
                            <SearchResultPost
                                key={postData.slug}
                                id={`searchResultItem_${index}`}
                                postData={postData}
                                value={value}
                                isFocus={focusIndex === index}
                                handleClick={navigateToFocus}
                                handleMouseEnter={() => setFocusIndex(index)}
                            />
                        ))}
                    </>
                )}
            </SearchResult>
            <Divider width="95%" color={themedPalette.text4} />
            <InformationWrapper>
                <Information>Enter 선택</Information>
                <Information>Up/Down 이동</Information>
                <Information>ESC 닫기</Information>
            </InformationWrapper>
        </Wrapper>
    );
};

export default SearchModal;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: 90vh;
    font-family: ${nanumGothic.normal.style.fontFamily};
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: ${themedPalette.input};
    width: 90%;
    margin: 15px 0px;
    border-radius: 20px;
`;

const SearchInput = styled.input`
    font-size: 15px;
    width: 95%;
    border: none;
    background-color: ${themedPalette.input};
    outline: none;
    line-height: 20px;
    height: 20px;
    margin-left: 10px;
    font-family: ${nanumGothic.normal.style.fontFamily};
    color: ${themedPalette.text1};
`;

const SearchResult = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const NoResult = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${themedPalette.text3};
`;

const InformationWrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    color: ${themedPalette.text3};
    height: 30px;
    margin-bottom: 10px;
`;

const Information = styled.div`
    color: ${themedPalette.text3};
`;
