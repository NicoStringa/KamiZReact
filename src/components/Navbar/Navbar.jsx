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
import ModalUser from './ModalUser/ModalUser';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHidden } from '../../redux/users/usersSlice';

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavbarContainerStyle>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to="/">
          <img src="/Kamizeta1.png" alt="Logo" />
        </Link>
      </div>
      <LinksContainerStyle>
        <CartNavStyle>
          <CartIcon />
        </CartNavStyle>

        <UserNavStyle>
          <UserContainerStyle
            onClick={() =>
              currentUser ? dispatch(toggleMenuHidden()) : navigate('/register')
            }
          >
            <SpanStyle>
              {currentUser ? `${currentUser.name}` : 'Log In'}
            </SpanStyle>
            <MdFace />
          </UserContainerStyle>
        </UserNavStyle>
      </LinksContainerStyle>
    </NavbarContainerStyle>
  );
}

export default Navbar;
