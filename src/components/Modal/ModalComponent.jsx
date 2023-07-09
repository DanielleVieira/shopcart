import { Modal } from "react-bootstrap";
import { ButtonLoadingComponent } from "../Button/ButtonLoadingComponent";

export const ModalComponent = ({
  show,
  onClose,
  children,
  buttons = [],
  title,
}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {buttons.map((button, index) => (
          <ButtonLoadingComponent key={index} {...button} />
        ))}
      </Modal.Footer>
    </Modal>
  );
};
