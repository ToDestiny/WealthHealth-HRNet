import React from 'react';
import styled from 'styled-components/macro';

const Overlay = styled.div`
  height: 120%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

const ModalContainer = styled.div`
  width: 50%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const CloseBtn = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  right: -0.5rem;
  top: -1.75rem;
  height: 30px;
  width: 30px;
  position: fixed;
  font-weight: bold;
  background-color: black;
  color: white;
  border-radius: 50px;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <Content>Employee Created!</Content>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
