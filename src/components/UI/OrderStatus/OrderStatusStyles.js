import styled from "styled-components";

export const StatusStyled = styled.span`
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 50px;
    padding: 10px;
`;

export const CheckStyled = styled(StatusStyled)`
  background: green;
`;

export const PendingStyled = styled(StatusStyled)`
  background: orange;
`;

export const CancelStyled = styled(StatusStyled)`
  background: red;
`;
