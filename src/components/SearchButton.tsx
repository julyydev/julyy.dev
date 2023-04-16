import styled from 'styled-components';
import SearchIcon from '../assets/svg/icon_search.svg';
import Image from 'next/image';
import { themedPalette } from '@/styles/themes';

const SearchButton = () => {
    return (
        <IconButton>
            <StyledImage src={SearchIcon} alt="search" onClick={() => {}} />
        </IconButton>
    );
};

export default SearchButton;

const StyledImage = styled(Image)`
    width: 23px;
    height: 23px;
    margin-top: 3px;
    margin-right: 10px;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.25rem;
    color: white;
    position: relative;
    &:hover {
        background: ${themedPalette.slight_layer};
    }
`;
