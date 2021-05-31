import React, {useState} from 'react';
import './edit-card.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditCard(props) {
  // movieData - состояние, полученное из пропса,  setMovieData - ф-ия по изменению состояния
  const [movieData, setMovieData] = useState(props.movie);
  function changeData(value, field) {
    // создаем новый объект, многоточие для раскрытия старого объекта и передачи полей в новый. Иначе просто сделается ссылка на старый объект
    const newData = { ...movieData }; 
    // newData.field = value; не подходит, поскольку будет искать поле field, а нужен raiting
    newData[field] = value;
    // заменяет movieData на новое значение. ТОЛЬКО метод из UseState, который я и создал выше
    setMovieData(newData);
  }

  return (
    <Modal show={props.isOpen}>
      <Modal.Header closeButton onHide={props.handleClose}>
        <Modal.Title>ADD MOVIE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form>
          <Form.Group> */}
            <Form.Label>Id</Form.Label>
            <div>{movieData.id}</div>
            <Form.Label>Title</Form.Label>
            {/* Нельзя чтобы приходил null, поэтому через ИЛИ создаем строку, покскольку нельзя привязывать к НУЛЛ любой элемент формы */}
            <Form.Control type="text" placeholder="" value={movieData.title || ''} onChange={(event) => changeData(event.target.value, 'title')}/>
            <Form.Label>Release date</Form.Label>
            <input type="date" id="input_date" name="trip-start" value={movieData.releaseDate || ''} onChange={(event) => changeData(event.target.value, 'releaseDate')}></input>
            <Form.Label>Movie url</Form.Label>
            <Form.Control type="text" placeholder="" value={movieData.movieUrl || ''} onChange={(event) => changeData(event.target.value, 'movieUrl')}/>
            <Form.Label>Genre</Form.Label>
            <Form.Control as="select" custom value={movieData.genre || ''} onChange={(event) => changeData(event.target.value, 'genre')}>
              <option value="1">Comedy</option>
              <option value="2">Horror</option>
              <option value="3">Drama</option>
              <option value="4">Crime</option>
              <option value="5">Documentary</option>
            </Form.Control>
            <Form.Label>Overview</Form.Label>
            <Form.Control type="text" placeholder="" value={movieData.overview || ''} onChange={(event) => changeData(event.target.value, 'overview')}/>
            <Form.Label>Runtime</Form.Label>
            <Form.Control type="text" placeholder="" value={movieData.runtime || ''} onChange={(event) => changeData(event.target.value, 'runtime')}/>
            <Form.Label>Raiting</Form.Label>
            <Form.Control type="text" placeholder="" value={movieData.raiting || ''} onChange={(event) => changeData(event.target.value, 'raiting')}/>
          {/* </Form.Group>
        </Form> */}
     </Modal.Body>
     <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>RESET</Button>
        <Button variant="primary">SUBMIT</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCard;