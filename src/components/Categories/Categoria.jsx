import React from 'react';

import { CardCategoria } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

export const Categoria = ({ img, title, category }) => {
  const selectedCategory = useSelector(state => state.categories.selectedCategory);

  const dispatch = useDispatch();

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.80 }}
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
    </CardCategoria>
  );
};

export default Categoria;

//TODO: Intentar hacerlo funcionar sin utilizar parte del codigo del NucbaZappi