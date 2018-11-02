import React from 'react';
import styled, { css, switchProp } from 'lib/css-in-js';

const StyledNav = styled.nav`
    ${switchProp('variant', {
        standard: css`
            border: 10px solid red;
            background: purple;
        `,
        primary: css`
            border: 1px solid red;
            background: purple;
        `,
    })};
`;

const Nav = () => <StyledNav variant="primary">Navigation</StyledNav>;

export default Nav;
