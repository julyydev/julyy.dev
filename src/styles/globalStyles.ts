import { createGlobalStyle } from 'styled-components';
import { themedPalette, themes } from './themes';

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        margin: 0;
        height: 100%;
        background-color: ${themedPalette.bg_page1};
    }
    
    div {
        color: ${themedPalette.text1};
        transition: color 0.3s;
    }

    body {
        ${themes.light}
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${themes.dark}
        }
    }

    body[data-theme='light'] {
        ${themes.light};
    }

    body[data-theme='dark'] {
        ${themes.dark};
    }
`;

export default GlobalStyles;
