import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  justify-content: center;
  background: var(--rich);
  padding: 25px;
  width: 50%;
  max-width: 620px;
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 30px;
  color: var(--smoke);
`;
