import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import MyOrdersCards from '../../components/MyOrders/CardsMyOrders';

import {
  MyOrdersBtnContainerStyled,
  MyOrdersContainerStyled,
  MyOrdersTitleStyled,
} from './MyOrdersStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';

const MyOrders = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail(`Error, you need an user to have orders`));
    } else {
      error && dispatch(clearError());
    }
  }, [orders, error, dispatch, currentUser?.token]);

  return (
    <>
      <MyOrdersContainerStyled>
        <MyOrdersTitleStyled>My Orders</MyOrdersTitleStyled>
        <MyOrdersCards />
        <MyOrdersBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Back</Button>
        </MyOrdersBtnContainerStyled>
      </MyOrdersContainerStyled>
    </>
  );
};

export default MyOrders;
