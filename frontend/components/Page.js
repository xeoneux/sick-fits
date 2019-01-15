import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Header from './Header';

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
