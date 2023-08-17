import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';
import { MdAddShoppingCart } from 'react-icons/md';

import {
  CardPrice,
  ContainerPrice,
  ProductsCard,
  CardBtnContainerStyled,
} from './CardsProductsStyles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { toast } from 'react-hot-toast';

const CardProduct = ({ id, front, closeup, back, title, price, desc }) => {
  const dispatch = useDispatch();

  return (
    <ProductsCard>
      <img src={front} alt={title} />
      <img className="back-img" src={back} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)} Zeni</CardPrice>
        <CardBtnContainerStyled>
          <Button
            onClick={() =>
              dispatch(
                addToCart(
                  { id, closeup, title, price, desc, front },
                  toast(`${title} kit added to the cart`, {
                    style: {
                      borderRadius: '10px',
                      background: 'var(--keppel)',
                      color: 'var(--smoke)',
                    },
                  })
                )
              )
            }
          >
            <MdAddShoppingCart />
          </Button>
        </CardBtnContainerStyled>
      </ContainerPrice>
    </ProductsCard>
  );
};

export default CardProduct;
