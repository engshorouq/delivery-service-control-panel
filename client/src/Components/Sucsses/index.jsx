import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './style.css';
import empty from '../../assets/img/immm.png';

class Sucsses extends Component {
  render() {
    return (
      // container
      <div className="container-fluid  d-flex justify-content-center mr-30">
        <div className="emptycontainer">
          <img src={empty} style={{ width: '40%' }} />
          <h1 className="block-title">!تمت عملية الدفع بنجاح</h1>
          <div className="description">
            أحببنا أن نؤكد لك أنك أتممت عملية الدفع كاملة دون أية مشاكل
          </div>
          <Button variant="outline-success"> متابعة التسوق</Button>
        </div>
      </div>
    );
  }
}

export default Sucsses;
