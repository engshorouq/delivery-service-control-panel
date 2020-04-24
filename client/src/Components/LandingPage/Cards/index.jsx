import React from 'react';

import './style.css';
import { Row, Col } from 'react-bootstrap';

const renderCard = data =>
  data.map(({ id, imageUrl, fullName, profession }) => (
    <Col lg={3} md={6} key={id} to="/" className="cards__card">
      <div className="cards__img">
        <img width="100%" src={imageUrl} alt={`${fullName} profile img`} />
      </div>
      <div>
        <h3 className="cards__title">{fullName}</h3>
        <h4 className="cards__sub-title">{profession}</h4>
      </div>
    </Col>
  ));

const Cards = ({ data }) => {
  return <section className="cards__container">{renderCard(data)}</section>;
};

Cards.defaultProps = { data: [] };


export default Cards;
