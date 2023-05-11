import styled from 'styled-components';
import { SearchIcon } from '../assets/svg';
import { themedPalette } from '@/styles/themes';

const SearchButton = () => {
    return (
        <IconButton>
            <SearchIcon width={23} height={23} onClick={() => {}} />
        </IconButton>
    );
};

export default SearchButton;

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
