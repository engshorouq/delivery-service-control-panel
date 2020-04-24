import React from 'react';
import './card-style.css';
import { Button } from 'react-bootstrap';

const Card = props => {
  console.log('yyyyyyyyy', props.itemobj, 'uuuu');
  // key for div and error of database
  return (
    <div className="col-md-4">
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={props.itemobj.imagepath}
            alt="card-img-1"
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.itemobj.title}</h4>
          <h4 className="card-title">
            ر.س
{props.itemobj.price}
          </h4>

          <a
            href={`/products/detalis/${props.itemobj.id}`}
            className="btn btn-outline-success"
          >
            المزيد
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
