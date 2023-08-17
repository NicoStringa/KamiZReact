import styled from "styled-components";

export const HeroContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/bg1.png") no-repeat;
  background-size: cover;
  width: 100%;
  h1 {
    margin: 10px;
    margin-bottom: 30px;
    text-align: center;
    text-shadow: 2px 0 var(--rich), -2px 0 var(--rich), 0 2px var(--rich),
      0 -2px var(--rich), 1px 1px var(--rich), -1px -1px var(--rich),
      1px -1px var(--rich), -1px 1px var(--rich);
  }
  @media (min-width: 1024px) {
    margin: 20px auto;
  }
`;

export const HeroFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 90%;
`;

export const HeroSearchBarStyle = styled.input`
  background-color: var(--smoke);
  outline: none;
  width: 100%;
  border: 2px solid var(--rich);
  border-radius: none;
  padding: 10px;
  color: black;

  @media (min-width: 1024px) {
    width: 50%;
    align-self: center;
  }
`;

export const HeroImgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const HeroBtnContainerStyled = styled.div`
  align-self: center;
  width: 100px;
  border: 1px solid red;
`;
