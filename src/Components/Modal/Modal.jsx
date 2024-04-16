import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalComponent({ isOpen, onRequestClose, ...props }) {
  return <Modal isOpen={isOpen} onRequestClose={onRequestClose}></Modal>;
}
