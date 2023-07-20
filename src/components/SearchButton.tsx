'use client';
import styled from 'styled-components';
import { SearchIcon } from '../assets/svg';
import { themedPalette } from '@/styles/themes';
import useModal from '@/hooks/useModal';
import Modal from './common/Modal';
import SearchModal from './SearchModal';
import { PostData } from '@/types/post';
import Keyboard from './common/Keyboard';
import manrope from '@/styles/fonts/manrope';
import { useEffect, useState } from 'react';
import { isMacOs } from 'react-device-detect';

interface Props {
    postDataList: PostData[];
}

const SearchButton = (props: Props) => {
    const { postDataList } = props;
    const { isModalOpen, handleModalToggle } = useModal();

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey && e.key === 'k') {
                handleModalToggle();
            }
        };

        setLoading(prev => !prev);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <SearchBox onClick={handleModalToggle}>
                <SearchLeft>
                    <SearchIcon width={15} height={15} fill="gray" />
                    <Search>Search</Search>
                </SearchLeft>
                <KeyBox>
                    {loading ? (
                        <></>
                    ) : (
                        <>
                            {isMacOs ? (
                                <Keyboard>⌘</Keyboard>
                            ) : (
                                <Keyboard>Ctrl</Keyboard>
                            )}
                            <Keyboard>K</Keyboard>
                        </>
                    )}
                </KeyBox>
            </SearchBox>
            <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
                <SearchModal
                    postDataList={postDataList}
                    onClose={handleModalToggle}
                />
            </Modal>
        </>
    );
};

export default SearchButton;

const SearchBox = styled.div`
    position: fixed;
    top: 12px;
    right: 225px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: ${themedPalette.input};
    width: 200px;
    height: 20px;
    border-radius: 50px;

    &:hover {
        cursor: pointer;
    }
`;

const SearchLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Search = styled.div`
    font-family: ${manrope.normal.style.fontFamily};
    font-size: 14px;
    color: ${themedPalette.text3};
    margin-left: 10px;
`;

const KeyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
