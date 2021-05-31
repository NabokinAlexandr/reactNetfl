import React from 'react';
import './filter.css'

function Filter(props) {
  return (
    <>
      <div className="filter__cover" onClick={props.onClick}>
        <div className="filter__name" name="all">ALL</div>
        <div className="filter__name" name="documentary">DOCUMENTARY</div>
        <div className="filter__name" name="comedy">COMEDY</div>
        <div className="filter__name" name="horror">HORROR</div>
        <div className="filter__name" name="crime">CRIME</div>
      </div>
    </>
  );
}

export default Filter;