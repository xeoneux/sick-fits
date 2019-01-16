import Link from 'next/link';

import Nav from './Nav';

const Header = () => (
  <div>
    <div className="bar">
      <h1>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </h1>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
