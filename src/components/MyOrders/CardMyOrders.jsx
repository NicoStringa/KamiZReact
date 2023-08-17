import { useNavigate } from 'react-router-dom';
import { formatDate, formatPrice } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import {
  IdStyled,
  OrderContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardsMyOrdersStyles';

const CardMisOrdenes = ({ createdAt, status, total, _id, closeup }) => {
  const navigate = useNavigate();

  return (
    <OrderContainerStyled onClick={() => navigate(`/summary/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>Order ID: {_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Date {formatDate(createdAt)}hs</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </OrderContainerStyled>
  );
};

export default CardMisOrdenes;
