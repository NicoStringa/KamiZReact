import styled from "styled-components";

export const FooterContainerStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  background: var(--rich);

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

export const LinksContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
