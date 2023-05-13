import { formatPrice } from '../../utils';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../../redux/cart/cartSlice';

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import {
  CardContainerStyle,
  CardInfoStyle,
  PriceStyle,
  ProductTitleStyle,
  QuantityContainerStyle,
} from './CardProductCheckoutStyles';


import { MdOutlinePlusOne } from 'react-icons/md';
import { MdRemove } from 'react-icons/md';
import { MdDelete } from 'react-icons/md'

const CardProductCheckout = ({id, closeup, title, price, quantity}) => {
  const dispatch = useDispatch();

  return (
    <CardContainerStyle>
      <img src={closeup} alt={title}/>
      <CardInfoStyle>
        <ProductTitleStyle>{title}</ProductTitleStyle>
        <PriceStyle>{formatPrice(price)} Zeni</PriceStyle>
      </CardInfoStyle>
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
    </CardContainerStyle>
  );
};

export default CardProductCheckout;