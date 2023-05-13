import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerLinkStyle = styled(motion.div)``;

export const StyleLink = styled(Link)`
  padding: 15px 30px;
  outline: none;
  border: none;
  background: var(--keppel);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;

  & span {
    font-weight: 700;
    font-size: 15px;
    background: var(--rich);
    -webkit-background-clip: text;
    color: white;
  }
`;
