import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../../../assets/img/img1.png';
import img2 from '../../../assets/img/img2.jpeg';

import img3 from '../../../assets/img/img3.png';
import './carrd-style.css';

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center mr-30">
        <div className="row">
          <div className="col-md-4">
            <Card
              // imgsrc={img1}
              imgsrc="fa fa-truck"
              title="توصيل مجاني"
              pargraph="للطلبات التي تزيد عن ٥٠٠ ريال

"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc="fa fa-check"
              // imgsrc={img2}
              title="سياسة الارجاع"
              pargraph="لايقبل الارجاع بعد فتح العبوة او استعمالها وفيما عدا ذلك يتحمل العميل تكاليف الشحن

"
            />
          </div>
          <div className="col-md-4">
            <Card
              // imgsrc={img3}
              imgsrc="fa fa-bus"
              title="الشحن"
              pargraph="             
              يتم الشحن عن طريق الشركات التالية 

              Aramex . DHL. Same. Fastlo

"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
