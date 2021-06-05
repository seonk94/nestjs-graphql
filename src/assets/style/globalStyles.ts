import { createGlobalStyle } from 'styled-components';
import { fly } from './animation';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        background-color: #2F3537;
        min-height: 100vh;
    }
    .fly-emoji {
        opacity: 0;
        position: fixed;
        bottom: 0;
        left: 20%;
        padding: 8px;
        background: #aaa;
        border-radius: 6px;
        animation: ${fly} 4s ease;
    }
`;
