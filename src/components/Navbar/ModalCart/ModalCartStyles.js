import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  background-color: var(--keppel);

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const CloseButtonContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin: 20px 20px;
`;

export const CloseButtonStyle = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  background: var(--caribe);
  color: var(--smoke);
  cursor: pointer;
`;

export const TitleStyle = styled.div`
  width: 100%;
  text-align: center;

  & h1 {
    margin-top: 40px;
    margin-left: 20px;
  }
`;

export const MainContainerStyle = styled.div`
  height: 100%;
`;

export const ProductsWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 600px;
  margin: 0 auto;
  padding: 10px;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  p {
    align-self: center;
  }
`;

export const ProductContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 95%;

  background: var(--caribe);
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 10px;

  & img {
    width: 80px;
    height: 80px;
  }
`;

export const TextContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  width: 200px;
`;

export const CardTitleStyle = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: var(--smoke);
  font-size: 1rem;
`;

export const PriceStyle = styled.span`
  font-weight: 700;
  font-size: 25px;
`;

export const PriceContainerStyle = styled.div`
  z-index: 1000;
  background-color: var(--caribe);
  padding: 10px;
  & p {
    text-align: center;
  }
`;

export const SubtotalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyle = styled(SubtotalStyle)``;

export const TotalStyle = styled(SubtotalStyle)``;

export const ButtonContainerStyle = styled(SubtotalStyle)`
  justify-content: center;
`;

export const QuantityContainerStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
