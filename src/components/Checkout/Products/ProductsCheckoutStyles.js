import styled from "styled-components";

export const ProductosContainerStyle = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 40%;
    height: 100vh;
  }
`;

export const ProductsTitleStyle = styled.h2`
  font-weight: 700;
  font-size: 25px;
`;

export const CardsWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 200px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--smoke);
    border-radius: none;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 400px);
  }
`;

export const PriceContainerStyle = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyle = styled(SubtotalStyle)``;

export const TotalStyle = styled(SubtotalStyle)``;

export const PriceTotalStyle = styled.span`
  color: var(--smoke);
  font-weight: 800;
  font-size: 20px;
`;

export const HrStyle = styled.hr`
  margin: 15px 0;
`;
