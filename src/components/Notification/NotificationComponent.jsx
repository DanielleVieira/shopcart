import { Alert, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import "./style.css";

export const NotificationComponent = ({ variant = "success", message }) => {
  //o alerta poderia ter continuado dismissible e no onclose passar o dispatch removeNotificationQueueActio, em vez de usar no use effect
  return createPortal(
    <Col className="notification">
      <Alert variant={variant}>
        <p>{message}</p>
      </Alert>
    </Col>,
    document.body
  );
};
