import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

// modal background color
// header color
// font colors
// icon colors 

*{
    font-family: 'Roboto', sans-serif;
}




/* h2{
    font-size: 20px;
} */
/* span{
    font-size: 18px;
    font-weight: lighter;
} */

@media only screen and (max-width: 768px){
    h2{
    font-size: 14px;
    }
    span {
        font-size: 12px;
    }
}


.languageToggle {
    
    span{
        font-size: 12px;
        font-weight: bold;
    }
}







`;

export default GlobalStyles;

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
