import React from 'react';
import styled from 'styled-components';

import Meta from './Meta';
import Header from './Header';

const MyButton = styled.button`
  font-size: 50px;
  background: red;

  span {
    font-size: 100px;
  }
`;

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>
          Click Me
          <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
