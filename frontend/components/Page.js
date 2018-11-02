import React from 'react';
import styled, { ThemeProvider, prop } from 'lib/css-in-js';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const StyledPage = styled.div`
    background: white;
    color: ${prop('theme.black')};
`;

const Page = ({ children }) => (
    <ThemeProvider theme={theme}>
        <StyledPage>
            <GlobalStyles theme={theme} />
            <Meta />
            <Header />
            {children}
            <Footer />
        </StyledPage>
    </ThemeProvider>
);

export default Page;
