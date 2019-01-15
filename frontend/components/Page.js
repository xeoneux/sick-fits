import React from 'react';
import styled from 'styled-components';

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
  color: black;
  background-color: white;
`;

const Inner = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 1000px;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        {this.props.children}
      </StyledPage>
    );
  }
}

export default Page;
