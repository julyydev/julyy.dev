'use client';
import styled from 'styled-components';
import { SearchIcon } from '../assets/svg';
import { themedPalette } from '@/styles/themes';
import useModal from '@/hooks/useModal';
import Modal from './common/Modal';
import SearchModal from './SearchModal';
import { PostData } from '@/types/post';

interface Props {
    postDataList: PostData[];
}

const SearchButton = (props: Props) => {
    const { postDataList } = props;
    const { isModalOpen, handleModalToggle } = useModal();

    return (
        <>
            <IconButton onClick={handleModalToggle}>
                <Positioner>
                    <SVGWrapper>
                        <SearchIcon
                            width={21}
                            height={21}
                            fill={themedPalette.text1}
                            onClick={() => {}}
                        />
                    </SVGWrapper>
                </Positioner>
            </IconButton>
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

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.25rem;
    position: fixed;
    top: 12px;
    z-index: 100;
    right: 285px;
    &:hover {
        background: ${themedPalette.slight_layer};
        border: 2px solid ${themedPalette.slight_layer};
    }
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
    color: #ffbc2e;
    svg {
        display: block;
    }
`;
