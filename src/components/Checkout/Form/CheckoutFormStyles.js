import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutDataStyle = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;
