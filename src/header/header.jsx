import React, { useState } from 'react';
import './header.css';
import ButtonAddMovieComponent from '../shared/button add movie/button-add-movie';
import Logo from '../shared/logo/logo';
import SearchComponent from './search/search';
import PopUpAddMovie from '../shared/popup-add-movie/popup-add-movie';

function HeaderComponent(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bckgrnd_cover"></div>
      <header className="header_cover">
        <div className="labels">
          <Logo />
          <ButtonAddMovieComponent onClick={handleShow}/>
        </div>
        <SearchComponent />
      </header>
      <PopUpAddMovie isOpen={show} handleClose={handleClose} location={'addForm'}/>
    </>
  );
}

export default HeaderComponent;