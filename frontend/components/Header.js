import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
  z-index: 2;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);

  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    background: ${({ theme }) => theme.red};
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    align-items: stretch;
    justify-content: space-between;
    grid-template-columns: auto 1fr;
    border-bottom: 10px solid ${({ theme }) => theme.black};

    @media (max-width: 1300px) {
      justify-content: center;
      grid-template-columns: 1fr;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
