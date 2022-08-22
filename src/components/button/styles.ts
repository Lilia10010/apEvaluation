import styled from "styled-components";

export const ButtonSubmit = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 15px;
  border-radius: var(--border-radius-container-primary);
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
