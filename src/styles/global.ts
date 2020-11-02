import { createGlobalStyle } from 'styled-components';

export const GlobalContainer = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    body {
        background-color: #EEEDF5;
        overflow-y:scroll;
        overflow-x:hidden;
        min-width: 100vw; 
    }

    #root {
        min-height: 100vh;
        width: 100%;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;