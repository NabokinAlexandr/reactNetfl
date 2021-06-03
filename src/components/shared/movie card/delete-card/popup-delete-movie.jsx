import React, {useState} from 'react';
import './popup-delete-movie.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PopUpDeleteMovie(props) {
  return (
    <Modal show={props.isOpenDelete}>
      <Modal.Header closeButton onHide={props.handleCloseDelete}>
        <Modal.Title>DELETE MOVIE</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>ARE YOU SURE?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpDeleteMovie;