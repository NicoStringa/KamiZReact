import styled from 'styled-components';

export const MyOrdersContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
`;

export const OrderContainerStyled = styled.div`
  background: var(--rich);
  width: 400px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 25px;
`;

export const IdStyled = styled.p`
  font-size: 15px;
  color: var(--caribe);
  margin-bottom: 15px;
`;

export const PriceStyled = styled.p`
  font-weight: 500;
  font-size: 25px;
`;
