import styled from 'styled-components';
import { SearchIcon } from '../assets/svg';
import { themedPalette } from '@/styles/themes';

const SearchButton = () => {
    return (
        <IconButton>
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
    position: relative;
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
