import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* Gray */
        --color-gray-0: #f8f9fa;
        --color-gray-50: #f1f3f5;
        --color-gray-100: #e9ecef;
        --color-gray-200: #dee2e6;
        --color-gray-400: #adb5bd;
        --color-gray-500: #868e96;
        --color-gray-600: #495057;
        --color-gray-800: #212529;

        /* Teal */
        --color-teal-0: #e6fcf5;
        --color-teal-300: #38d9a9;
        --color-teal-100: #96f2d7;
        --color-teal-500: #12b886;
        --color-teal-600: #0ca678;

        /* Yellow */
        --color-yellow-50: #fff3bf;
        --color-yellow-400: #fcc419;

        /* Red */
        --color-red-600: #f03e3e;

        --shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.24);
    }

    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        overflow: hidden;
    }
    
    body {
        font-family: "Roboto", sans-serif;
        color: var(--color-gray-500);
        line-height: 1;
        font-weight: 400;
        font-size: 1.6rem;
    }
`;

export default GlobalStyles;
