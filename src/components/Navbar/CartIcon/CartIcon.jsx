import React from 'react';

import { MdShoppingCart } from 'react-icons/md';

import { LinkContainerStyle } from './../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../../redux/cart/cartSlice';

const CartIcon = () => {

  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => acc += item.quantity, 0);

  const dispatch = useDispatch();

  return (
    <LinkContainerStyle onClick={() => dispatch(toggleCartHidden())}>
      <MdShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyle>
  );
};

export default CartIcon;