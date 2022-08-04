import { createGlobalStyle } from 'styled-components';
import HelveticaNeueWoff from './HelveticaNeueCyr-Roman.woff';
import HelveticaNeueWoff2 from './HelveticaNeueCyr-Roman.woff2';
import HelveticaNeueBoldWoff from './HelveticaNeueCyr-Bold.woff';
import HelveticaNeueBoldWoff2 from './HelveticaNeueCyr-Bold.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueWoff2}) format('woff2'),
             url(${HelveticaNeueWoff}) format('woff');
    }

    @font-face {
        font-family: 'Helvetica Neue Bold';
        src: url(${HelveticaNeueBoldWoff2}) format('woff2'),
             url(${HelveticaNeueBoldWoff}) format('woff');
    }
`;

export default FontStyles;