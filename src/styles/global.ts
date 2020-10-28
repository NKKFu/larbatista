import { createGlobalStyle } from 'styled-components';

export const GlobalContainer = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`;