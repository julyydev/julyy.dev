import styled, { keyframes } from 'styled-components';
import { themedPalette } from '@/styles/themes';

const Spinner = () => {
    return (
        <Wrapper>
            <SpinnerAnimation />
        </Wrapper>
    );
};

export default Spinner;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    z-index: 200;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerAnimation = styled.div`
    width: 40px;
    height: 40px;
    border: 8px solid ${themedPalette.text4};
    border-top: 8px solid ${themedPalette.primary_500};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
