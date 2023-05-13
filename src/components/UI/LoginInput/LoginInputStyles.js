import styled from "styled-components";

export const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyle = styled.input`
  background-color: ${({ isError }) =>
    isError ? "var(--auburn)" : "var(--keppel)"};
  outline: none;
  height: 30px;
  padding: 20px;
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
