import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--caribe);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  padding: 30px;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 50%;
      text-decoration: underline;
    }
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--smoke);
  font-size: 20px;
  &:hover {
    opacity: 50%;
    text-decoration: underline;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 30px 0;
`;
