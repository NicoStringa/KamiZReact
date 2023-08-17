import Button from '../UI/Button/Button';
import CardProduct from './CardProduct';

import { LoadContainerStyle } from '../../pages/Home/HomeStyles';
import { ProductsContainer, LoadBtnContainerStled } from './CardsProductsStyles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';

import { MdArrowCircleDown } from "react-icons/md";
import { MdArrowCircleUp } from "react-icons/md";

const CardsProducts = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  let products = useSelector(state => state.products.products);
  
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  
  if(selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  };

  const totalProducts = useSelector(state => state.products.totalProducts);
  
  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory])
  
  return (
    <>
      <ProductsContainer>
        {Object.entries(products).map(([, kits]) =>
          kits.map(kit => {
            if(limit >= kit.id || selectedCategory) {
              return <CardProduct key={kit.id} {...kit} />;
            }
            return null;
          })
        )}
      </ProductsContainer>
      {!selectedCategory && (
      <LoadContainerStyle>
        <LoadBtnContainerStled>
        <Button
          onClick={() => setLimit(prevLimit => prevLimit - 3)}
          secondary='true'
          disabled={INITIAL_LIMIT === limit}
        >
          <span><MdArrowCircleUp/></span>
        </Button>
        <Button onClick={() => setLimit(prevLimit => prevLimit + 3)} disabled={totalProducts <= limit}><MdArrowCircleDown/></Button>
        </LoadBtnContainerStled>
      </LoadContainerStyle>
      )}

    </>
  );
};

export default CardsProducts;