import styled from "styled-components";

export const InputBoxStyle = styled.div`
  display: flex;
  margin: 15px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyle = styled.label`
  display: flex;
  margin: 15px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyle = styled.input`
  background-color: ${({ isError }) =>
    isError ? "var(--auburn)" : "var(--keppel)"};
  outline: none;
  height: 30px;
  padding: 10px 20px;
  color: white;
  width: 100%;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: white;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--rich) inset;
  }
`;

export const ErrorMessageStyle = styled.p`
  margin: 0;
  margin-top: 5px;
  color: var(--rich);
  font-size: 14px;
`;
