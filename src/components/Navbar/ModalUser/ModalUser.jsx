import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModalUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentUser,
  toggleMenuHidden,
} from '../../../redux/users/usersSlice';

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hello ${currentUser?.name}`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/my-orders">My Orders</LinkStyled>
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleMenuHidden());
            }}
          >
            Sign out
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
