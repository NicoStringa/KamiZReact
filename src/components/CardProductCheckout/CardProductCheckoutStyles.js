import styled from "styled-components";

export const CardContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: var(--keppel);
  padding: 5px;

  & img {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1024px) {
    width: 85%;
    margin-top: 15px;
  }
`;

export const CardInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  width: 200px;
`;

export const ProductTitleStyle = styled.h3`
  margin: 0;
  font-weight: 500;
`;

export const PriceStyle = styled.span`
  font-weight: 500;
  font-size: 25px;
`;

export const QuantityContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: var(--caribe);
  width: 50%;
  border: 1px solid red;

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
