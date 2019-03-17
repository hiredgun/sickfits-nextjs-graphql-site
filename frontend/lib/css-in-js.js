import styled, { css, ThemeProvider } from 'styled-components';
import { prop, ifProp, switchProp } from 'styled-tools';
import { generateMedia } from 'styled-media-query';

const media = generateMedia({
    huge: '1440px',
    large: '1170px',
    medium: '768px',
    small: '450px',
});

export default styled;
export { css, prop, ifProp, switchProp, ThemeProvider, media };