import React from 'react';
import { formatPrice } from '../../../utils';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';

import {
  ProductosContainerStyle,
  ProductsTitleStyle,
  CardsWrapperStyle,
  PriceContainerStyle,
  SubtotalStyle,
  EnvioStyle,
  HrStyle,
  TotalStyle,
  PriceTotalStyle,
} from './ProductsCheckoutStyles';

const ProductsCheckout = ( { cartItems, shippingCost, price }) => {
  return (
    <ProductosContainerStyle>
      <ProductsTitleStyle>Your Order</ProductsTitleStyle>
      <CardsWrapperStyle>
        {cartItems.length ? (
          cartItems.map(item => 
            <CardProductCheckout key={item.id} {...item}/>)
        ) : (
          <p>Your cart is empty</p>
        )}
      </CardsWrapperStyle>
      <PriceContainerStyle>
        <SubtotalStyle>
          <p>Subtotal</p>
          <span>{formatPrice(price)} Zeni</span>
        </SubtotalStyle>
        <EnvioStyle>
          <p>Shippin:</p>
          <span>{formatPrice(shippingCost)} Zeni</span>
        </EnvioStyle>
        <HrStyle />
        <TotalStyle>
          <p>Total:</p>
          <PriceTotalStyle>{formatPrice(price + shippingCost)} Zeni</PriceTotalStyle>
        </TotalStyle>
      </PriceContainerStyle>
    </ProductosContainerStyle>
  );
};

export default ProductsCheckout;
