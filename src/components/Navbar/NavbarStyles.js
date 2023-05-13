import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainerStyle = styled.div`
  height: 100px;
  background-color: var(--columbia);
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0%;
  z-index: 9999;
`;

export const ModalOverlayStyle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyle = styled.div`
  color: var(--rich);
  display: flex;
  justify-content: center;
  gap: 40px;

  a {
    padding: 10px 20px;
    color: var(--rich);
    border: 2px solid var(--rich);
  }
`;

export const LinkContainerStyle = styled.div`
  font-size: 30px;
  color: var(--caribe);
`;

export const UserContainerStyle = styled(LinkContainerStyle)`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

export const CartNavStyle = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 30%;
    border: 1px solid var(--rich);
    color: var(--smoke);
    background-color: var(--auburn);
    font-size: 15px;
    margin-left: 5px;
    padding: 1px;
  }
`;

export const UserNavStyle = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: #282612;
    font-size: 20px;
    margin-right: 20px;
  }
`;

export const SpanStyle = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
