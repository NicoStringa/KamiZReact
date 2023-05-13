import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ForgotContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 20px;
`;

export const ForgotEmailStyle = styled.p`
  color: var(--rich);
  background: var(--columbia);
  padding: 5px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
