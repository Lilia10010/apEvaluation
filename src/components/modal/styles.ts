import styled from "styled-components";

interface ContainerProps {
  visible: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px 20px;
  background: rgb(204, 28, 28);
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 73%);
  box-sizing: 0 50px 25px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperModal = styled.div`
  border-radius: 15px;
  background: #fff;
  overflow: auto;
  padding: 50px 15px;
  position: relative;
`;

export const CloseModal = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 1.2rem;
  border: 0;
  background: transparent;
  font-weight: 700;
  color: var(--magenta);
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
