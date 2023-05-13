import { Link, useNavigate } from 'react-router-dom';

import { MdFace } from 'react-icons/md';

import CartIcon from './CartIcon/CartIcon';
import ModalCart from './ModalCart/ModalCart';

import {
  CartNavStyle,
  LinksContainerStyle,
  NavbarContainerStyle,
  SpanStyle,
  UserContainerStyle,
  UserNavStyle,
} from './NavbarStyles';

function Navbar() {

  const navigate = useNavigate();

  return (
    <NavbarContainerStyle>
      <ModalCart />      <div>
        <Link to='/'>
          <img
            src='/Kamizeta1.png'
            alt='Logo'
          />
        </Link>
      </div>
      <LinksContainerStyle>

        <CartNavStyle>
          <CartIcon/>
        </CartNavStyle>

        <UserNavStyle>
          <UserContainerStyle onClick={() => navigate('/login')}>
            <SpanStyle>Log in</SpanStyle>
            <MdFace />
          </UserContainerStyle>
        </UserNavStyle>
      </LinksContainerStyle>
    </NavbarContainerStyle>
  );
}

export default Navbar;