import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 100vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 20px;
`;

export const LoginPasswordStyle = styled.p`
  margin: 0;

  color: var(--rich);
  background: var(--columbia);
  padding: 5px;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;

export const LoginEmailStyle = styled.p`
  color: var(--rich);
  background: var(--columbia);
  padding: 5px;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
