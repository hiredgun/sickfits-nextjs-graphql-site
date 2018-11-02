import React from 'react';
import styled, { ThemeProvider } from 'lib/css-in-js';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const StyledPage = styled.div`
  border: 1px solid red;
`;

const Page = ({ children }) => {
  return (
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
};

export default Page;
