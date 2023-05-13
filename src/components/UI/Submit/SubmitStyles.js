import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSubmitStyle = styled(motion.button)`
  padding: 15px 30px;
  outline: none;
  border: none;
  background: var(--keppel);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
