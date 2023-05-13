import React, { useRef } from 'react';

import Categorias from '../../components/Categories/Categorias';
import CardsProducts from '../../components/Products/CardsProducts';
import Hero from '../../components/Hero/Hero';

import {
  CategoriesWrapper,
  HomeWrapper,
  ProductsWrapper,
} from './HomeStyles';

function Home() {
  const productsRef = useRef();

  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y,
    )
  };

  return (
    <HomeWrapper>
      <Hero doScroll={doScroll}/>

      <CategoriesWrapper>
        <h2>Categories</h2>
        <Categorias />
      </CategoriesWrapper>

      <ProductsWrapper ref={productsRef}>
        <h2>Our Products</h2>
        <CardsProducts />
      </ProductsWrapper>
    </HomeWrapper>
  );
}

export default Home;