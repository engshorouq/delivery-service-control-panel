import React from 'react';
import './carrd-style.css';

const Card = props => {
  return (
    <div className="cardddd  text-center shadow">
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="f-card-text">{props.pargraph}</p>
      </div>
      <div className="overfl">
        {/* <img src={props.imgsrc} alt="card-img-1" className="card-img-topp" /> */}
        <i
          className={props.imgsrc}
          aria-hidden="true"
        // className="card-img-topp"
        />
      </div>
    </div>
  );
};
export default Card;
