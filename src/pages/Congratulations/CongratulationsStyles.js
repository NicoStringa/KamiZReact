import styled from "styled-components";

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 30px;
`;

export const ImgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  // border: 1px solid red;
  
  & img {
    height 100%;
  }
`;

export const TitleStyle = styled.h1`
  color: var(--smoke);
`;

export const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
`;
