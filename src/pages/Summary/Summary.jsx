import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils';

import CardSummary from '../../components/Summary/CardSummary';
import Link from '../../components/UI/Link/Link';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../axios/axios-orders';
import {
  CostShippingStyled,
  CostProductStyled,
  CostTotalStyled,
  HrStyled,
  ProductsContainerStyled,
  SummaryContainerInfoStyled,
  SummaryContainerStyled,
  SummaryTitleStyled,
} from './SummaryStyles';

const Summary = ({ imagen }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  const { orderId } = useParams();

  const [visitedOrder, setVisitedOrder] = useState(null);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }

    setVisitedOrder(orders?.find((order) => order._id === orderId));
  }, [orderId, currentUser, orders]);

  return (
    <SummaryContainerStyled>
      <SummaryTitleStyled>
        <h1>Order Summary: #{visitedOrder?._id.slice(0, 7)}</h1>
        <Link borderRadius="20" to="/my-orders"></Link>
      </SummaryTitleStyled>
      <h2>Products:</h2>
      <ProductsContainerStyled>
        {visitedOrder?.items.map((item) => (
          <CardSummary key={item._id} {...item} />
        ))}
      </ProductsContainerStyled>
      <HrStyled />
      <SummaryContainerInfoStyled>
        <h3>Cost:</h3>
        <CostProductStyled>
          <p>Products cost</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostProductStyled>
        <CostShippingStyled>
          <p>Shipping cost</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostShippingStyled>
        <CostTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostTotalStyled>
      </SummaryContainerInfoStyled>
    </SummaryContainerStyled>
  );
};

export default Summary;
