import { Modal } from 'react-bootstrap';
import React from 'react'

import { useDispatch } from 'react-redux';
import { setModalStatus } from '../store/modal/actionCreator';

const ModalBlock = ({visibal, children, title }) => {
  const dispatch = useDispatch();

  return (
    <Modal show={visibal} animation={true} autoFocus onHide={() => dispatch(setModalStatus(undefined))}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
}
 
export default ModalBlock;