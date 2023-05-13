import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const StyleButton = styled(motion.button)`
  padding: 5px 10px;
  outline: none;
  background: var(--keppel);
  color: var(--rich);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--smoke);
    color: var(--keppel);
    border: 3px solid var(--keppel);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 25%;
  }
`;
