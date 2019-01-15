import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Meta from './Meta';
import Header from './Header';

const theme = {
  red: '#FF0000',
  grey: '#3A3A3A',
  black: '#393939',
  maxWidth: '1000px',
  offWhite: '#EDEDED',
  lightgrey: '#E1E1E1',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background-color: white;
  color: ${({ theme }) => theme.black};
`;

const Inner = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
