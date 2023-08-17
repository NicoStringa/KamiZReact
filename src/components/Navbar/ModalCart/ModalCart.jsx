import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyle,
  MainContainerStyle,
  CloseButtonContainerStyle,
  CloseButtonStyle,
  ContainerStyle,
  EnvioStyle,
  PriceContainerStyle,
  PriceStyle,
  ProductsWrapperStyle,
  SubtotalStyle,
  TitleStyle,
  TotalStyle,
} from './ModalCartStyles';
import { ModalOverlayStyle } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleCartHidden } from '../../../redux/cart/cartSlice';

const ModalCart = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const hiddenCart = useSelector((state) => state.cart.hidden);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(toggleCartHidden());
    }
  }, [dispatch]);

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyle
          onClick={() => dispatch(toggleCartHidden())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyle
            initial={{ translateX: -600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -600 }}
            transition={{ duration: 0.5 }}
            key="cart-user"
          >
            <CloseButtonContainerStyle>
              <CloseButtonStyle
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => dispatch(toggleCartHidden())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyle>
              <Increase
                onClick={() => dispatch(clearCart())}
                disabled={!cartItems.length}
              >
                <MdDeleteForever />
              </Increase>
            </CloseButtonContainerStyle>

            <MainContainerStyle>
              <TitleStyle>
                <h1>Your Products</h1>
              </TitleStyle>

              <ProductsWrapperStyle>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>The cart is empty</p>
                )}
              </ProductsWrapperStyle>
            </MainContainerStyle>

            <PriceContainerStyle>
              <SubtotalStyle>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)} Zeni</span>
              </SubtotalStyle>
              <EnvioStyle>
                <p>Shippment:</p>
                <span>{formatPrice(shippingCost)} Zeni</span>
              </EnvioStyle>
              <hr />
              <TotalStyle>
                <p>Total:</p>
                <PriceStyle>
                  {formatPrice(totalPrice + shippingCost)} Zeni
                </PriceStyle>
              </TotalStyle>
              <ButtonContainerStyle>
                <Submit
                  onClick={() => {
                    navigate('/checkout');
                    dispatch(toggleCartHidden());
                  }}
                  disabled={!cartItems.length}
                >
                  Buy
                </Submit>
              </ButtonContainerStyle>
            </PriceContainerStyle>
          </ContainerStyle>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
