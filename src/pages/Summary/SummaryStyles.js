import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SummaryContainerStyled = styled.div`
  padding: 35px 150px;
  height: 100vh;
`;

export const SummaryTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: var(--rich);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: var(--btn-gradient);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HrStyled = styled.hr`
  margin: 4rem 0;
`;

export const SummaryContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CostProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostShippingStyled = styled(CostProductStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostTotalStyled = styled(CostProductStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;
