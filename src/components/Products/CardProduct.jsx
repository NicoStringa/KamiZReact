import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';
import { MdAddShoppingCart } from "react-icons/md"

import {
  CardPrice,
  ContainerPrice,
  ProductsCard,
} from './CardsProductsStyles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProduct = ({ id , front, closeup, back, title, price }) => {
  const dispatch = useDispatch();

  return (
    <ProductsCard>
      <img src={front} alt={title} 
      onMouseOver={e => (e.currentTarget.src = back)}
      onMouseOut={e => (e.currentTarget.src = front)}/>
      <h2>{title}</h2>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)} Zeni</CardPrice>
        <Button onClick={() => dispatch(addToCart({id, closeup, title, price}))}><MdAddShoppingCart/></Button>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default CardProduct;