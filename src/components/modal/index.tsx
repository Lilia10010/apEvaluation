import { Heading } from "../tipografia";
import { Container, WrapperModal, CloseModal } from "./styles";

interface ModalProps {
  visible: boolean;
  message: string;
  onClick: () => void;
}

export const Modal = ({ visible = false, message, onClick }: ModalProps) => {
  return (
    <Container visible={visible}>
      <WrapperModal>
        <CloseModal aria-label="fechar modal" onClick={() => onClick()}>
          X
        </CloseModal>
        <Heading name={message} typeHeading="subheading" />
      </WrapperModal>
    </Container>
  );
};
