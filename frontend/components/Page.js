import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Header from './Header';

const MyButton = styled.button`
  background: red;
  font-size: 100px;
`;

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>Click Me</MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
