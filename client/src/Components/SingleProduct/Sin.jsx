import React, { Component } from 'react';
import { Spinner, Row, Col, Alert, Button, Container } from 'react-bootstrap';
import './style.css';

class Sin extends Component {
  addCartHandler = () => {
    console.log(111111, 2222, 3333333);
    this.props.addToCart(this.props.objdetls.id);
  };

  render() {
    const { objdetls } = this.props;
    console.log(objdetls, 'opt');

    return (
      <div className="">
        {objdetls ? (
          <Container fluid>
            <Row className="rr">
              <Col lg={6} xs={24} className="p2">
                <h3>
                  {objdetls.title}
                  <span>
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                  </span>
                </h3>
                <p>{objdetls.usemethod}</p>

                <div className="ticket">
                  <ul>
                    <li> السعر يبدأ من : {objdetls.price} ر.س</li>
                  </ul>
                </div>
                <div className="featur">
                  <h4>المكونات</h4>
                  <ul>
                    <i className="fa fa-check-circle" aria-hidden="true" />

                    <li>{objdetls.content}</li>
                  </ul>
                </div>
                <div className="p2_book">
                  <button className="link-btn" onClick={this.addCartHandler}>
                    أضف لسلة
                  </button>{' '}
                </div>
              </Col>
              <Col lg={6} xs={24} className="p1">
                <img src={objdetls.imagepath} />{' '}
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="saved-offer__spinner">
            {' '}
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </div>
    );
  }
}
export default Sin;
