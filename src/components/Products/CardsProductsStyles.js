import styled from 'styled-components';

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
  height: 500px;
  padding: 15px;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  img {
    width: 100%;
    margin-bottom: 20px;
  }
  .back-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .back-img:hover {
    opacity: 1;
    background: var(--columbia);
  }
  h2 {
    height: 60px;
    font-weight: 600;
    margin: auto;
    color: var(--rich);
  }
  p {
    color: var(--rich);
    text-align: center;
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

export const CardBtnContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const LoadBtnContainerStled = styled.div`
  display: flex;
  align-self: center;
  width: 10%;
  gap: 20px;
`;
