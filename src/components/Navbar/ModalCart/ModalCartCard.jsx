import React from 'react';
import { formatPrice } from '../../../utils';

import { MdOutlinePlusOne } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
import { MdDelete } from 'react-icons/md'

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyle,
  TextContainerStyle,
  CardTitleStyle,
  PriceStyle,
  QuantityContainerStyle,
} from './ModalCartStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';

const ModalCartCard = ({id, closeup, title, price, quantity}) => {

  const dispatch = useDispatch();
  return (
    <ProductContainerStyle>
      <img src={closeup} alt={title}/>
      <TextContainerStyle>
        <CardTitleStyle>{title}</CardTitleStyle>
        <PriceStyle>{formatPrice(price)} Zeni</PriceStyle>
      </TextContainerStyle>
      <QuantityContainerStyle>
        <Increase
          bgColor='var(--keppel)'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <MdDelete /> : <MdRemove />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(addToCart({id, closeup, title, price}))}>
          <MdOutlinePlusOne />
        </Increase>
      </QuantityContainerStyle>
    </ProductContainerStyle>
  );
};

export default ModalCartCard;