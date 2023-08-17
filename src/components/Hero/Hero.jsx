import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import { MdSearch } from "react-icons/md"

import {
  HeroContainerStyle,
  HeroFormStyle,
  HeroSearchBarStyle,
  HeroImgStyle,
  HeroBtnContainerStyled,
} from './HeroStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Hero = ({ doScroll }) => {

  const [value, setValue] = useState('')

  const listOfCategories = useSelector(state => state.categories.categories).map(category => category.category);

  const dispatch = useDispatch();

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(' ').join('');

    const selectedCategory = listOfCategories.find(category => category.toLowerCase() === newCategory);

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert('The category does not exist');
    }


    setValue(' ');
  };


  return (
    <HeroContainerStyle>
        <h1 className='title'>What are you looking for Saiyan?</h1>
        <HeroFormStyle>
          <HeroSearchBarStyle
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='e.g. EPL'
          />
          <HeroBtnContainerStyled>
          <Button onClick={e => handlerSubmit(e, value)} radius='10' disabled={!value}><MdSearch/></Button>
          </HeroBtnContainerStyled>
        </HeroFormStyle>
      <HeroImgStyle>
        <img src='/GokuFutbol.png' alt=''/>
      </HeroImgStyle>
    </HeroContainerStyle>
  );
};

export default Hero;