import { createGlobalStyle } from "styled-components";
import GilroyRegular from "./fonts/Gilroy-Regular.ttf";
import GilroySemiBold from "./fonts/Gilroy-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Gilroy-Regular';
        src: url(${GilroyRegular});
    }
    @font-face {
        font-family: 'Gilroy-SemiBold';
        src: url(${GilroySemiBold});
    }
`;
