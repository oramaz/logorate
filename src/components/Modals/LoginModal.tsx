import React, { useState } from "react";
import "../../assets/styles/App.css";

import { Modal } from "react-bootstrap";
import { LoginForm } from "../../components/Auth/LoginForm";

export const LoginModal: React.FC = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  return (
    <React.Fragment>
      <Modal
        show={isLoginModal}
        onHide={() => setIsLoginModal(false)}
        centered
        scrollable
        dialogClassName="modal-600w"
      >
        <Modal.Body className="mx-auto" style={{ padding: "40px 0" }}>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
