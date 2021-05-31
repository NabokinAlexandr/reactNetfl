import React from 'react';
import './sort.css';
import {Form} from 'react-bootstrap';

function Sort(props) {
  return (
    <>
      <div className="sort__cover">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>SORT BY</Form.Label>
          <Form.Control as="select" onChange={props.onChange}>
            <option value="relDate">RELEASE DATE</option>
            <option value="raiting">RAITING</option>
          </Form.Control>
        </Form.Group>
      </div>
    </>
  );
}

export default Sort;