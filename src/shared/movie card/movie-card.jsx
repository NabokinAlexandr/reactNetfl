import React, { useState } from 'react';
import './movie-card.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import PopUpAddMovie from '../popup-add-movie/popup-add-movie';
import PopUpDeleteMovie from './delete-card/popup-delete-movie';
import allMovies from '../../mock/mock';


function MovieCard(props) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);


  return (
    <>
    <Card>
      <div className="edit_cover">
        <div id="item-edit" onClick={handleShow}>:</div>
        {show ? (
          <div className="card-menu-buttons">
            <div className="closespan" style={{color:'white'}} onClick={handleClose}>
              <div style={{width:'70px'}}></div><div style={{width:'20px'}}>x</div></div>
            <Button variant="dark" onClick={handleShowDelete}>Delete</Button>
            <Button variant="dark" onClick={handleShowEdit}>Edit</Button>
          </div>
        ) : null}
      </div>
      <Card.Img variant="top" src={props.movie.movieUrl} />
      <Card.Body>
        <div className="item__cover">
          <div className="name-genre__cover">
            <div className="item__name">{props.movie.name}</div>
            <div className="item__genre">{props.movie.genre}</div>
          </div>
          <div>
            <div className="item__year">{props.movie.date}</div>
            <div>{props.movie.raiting}</div>
          </div>
        </div>
      </Card.Body>
      <PopUpAddMovie isOpen={showEdit} handleClose={handleCloseEdit} movie={props.movie}/>
      <PopUpDeleteMovie isOpenDelete={showDelete} handleCloseDelete={handleCloseDelete} movie={props.movie}/>
    </Card>
    </>
  );
}

export default MovieCard;