import styled from "styled-components";
import { motion } from "framer-motion";

export const IncreaseStyle = styled(motion.button)`
  background: var(--rich);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 20px;
  font-weight: 700;
  color: var(--smoke);
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
