import styled from "styled-components";

export const ContainerCheckoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100vh;
  margin-top: 30px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
