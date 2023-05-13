import styled from "styled-components";

export const FoundContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const FoundTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & h1 {
    margin: 20px 0;
  }
`;

export const FoundTitleStyle = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;

export const FoundSubtitleStyle = styled.h2`
  font-weight: 400;
`;

export const ErrorImgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
`;
