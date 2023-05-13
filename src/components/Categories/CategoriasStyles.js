import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px auto;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  user-select: none;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  padding: 15px;

  background-color: ${({ selected }) =>
    selected ? "var(--keppel)" : "var(--columbia)"};
  border-radius: none;
  cursor: pointer;

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 15px;
    color: ${({ selected }) => (selected ? "var(--smoke)" : "var(--rich)")};
    font-weight: 700;
  }

  &:hover {
    opacity: 50%;
  }
`;
