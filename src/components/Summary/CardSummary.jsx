import React from 'react';
import { formatPrice } from '../../utils';

import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from './CardSummaryStyles';

const CardSummary = ({ title, desc, quantity, closeup, price }) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img src={closeup} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardSummary;
