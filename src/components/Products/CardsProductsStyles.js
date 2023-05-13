import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 450px);
  row-gap: 45px;
  margin: 30px auto;
  width: 100%;
`;

export const ProductsCard = styled.div`
  background: var(--columbia);
  width: 300px;
  height: 450px;
  padding: 15px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
  img {
    width: 100%;
  }
  h2 {
    height: 60px;
    font-weight: 600;
    margin: auto;
    color: var(--rich);
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const CardPrice = styled.span`
  font-weight: 500;
  font-size: 25px;
  color: var(--rich);
`;
