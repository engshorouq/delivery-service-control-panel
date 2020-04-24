import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './style.css';
import empty from '../../assets/img/fail.png';

class Fail extends Component {
  render() {
    return (
      // container
      <div className="container-fluid  d-flex justify-content-center mr-30">
        <div className="emptycontainer">
          <img src={empty} style={{}} />
          <h1 className="block-title">!نأسف عملية الدفع فشلت</h1>
          <div className="description">
            يرجى منك إعادة متابعة عملية الدفع مرة أخرى
          </div>
          <Button variant="outline-danger">أعد المحاولة</Button>
          {' '}
        </div>
      </div>
    );
  }
}
export default Fail;
