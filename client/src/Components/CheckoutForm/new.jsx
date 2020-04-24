/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Select, notification } from 'antd';

import { Spinner } from 'react-bootstrap';

// import Script from 'react-load-script';
import './style.css';

const { Option } = Select;

class CheckoutForm extends Component {
  state = {
    checkoutId: '',
    scriptLoaded: false,
    name: '',
    phone: '',
    address: '',
    form: false,
    e: null,
  };

  //
  // componentDidMount() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ amount: this.props.totalPrice }),
  //   };
  //   fetch(`api/v1/checkout-form`, requestOptions)
  //     .then(res => res.json())
  //     .then(res => this.setState({ checkoutId: res.id }))
  //     .catch(er => {
  //       console.log('44444', er);
  //     });
  // }

  handelPaymentMerthod = e => {
    this.setState({ e: e });
  };

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onLoad = () => this.setState({ scriptLoaded: true });

  nextStep = () => {
    const e = this.state.e;

    if (e == 3) {
      console.log('eee', e);

      const { phone, address, name } = this.state;
      // const formData = new FormData();
      // formData.append('e', e);
      // formData.append('address', address);
      // formData.append('phone', phone);
      // formData.append('name', name);
      // formData.append('price', this.props.totalPrice);
      // formData.append('quntity', this.props.totalQty);
      const formData = {
        e: e,
        address: address,
        name: name,
        phone: phone,
        price: this.props.totalPrice,
        quntity: this.props.totalQty,

      }

      console.log('ffff', formData);

      fetch('/api/v1/addOrder/', {
        method: 'POST',
        body: formData,
      })
        .then(res => res.json())
        .then(res => {
          if (res.result) {
            console.log('tre', res.result);
            // notification.success({
            //   message: 'تم الطلب الطلب بنجاح',
            //   duration: 1.5,
            // });
          } else {
            console.log('trekkk');

            // notification.open({
            //   message: res.error,
            //   duration: 1.5,
            // });
          }
        })
        .catch(err => {
          console.log(er, 444)
          notification.error({
            message: 'هناك خطأ اعد المحاولة مرة اخرى',
            duration: 1.5,
          });
        });
    } else {
      // const { e,name, phone, address } = this.state; كيف يا شروق امررهم للكمبوننت الرديركت عشان عايزاهم هناك
      // this.props.totalPrice
      // this.props.totalQty
      console.log('edssasa')
      // this.setState({ form: true });

    }

  };

  render() {
    const { infor } = this.props;
    // checkoutId, scriptLoaded,
    const { name, phone, address, form } = this.state;

    return (
      <div style={{ width: '50%', textAlign: 'center', marginTop: '0px' }}>
        <form className="pay-form" onSubmit={this.handleSubmit}>
          <label>
            أدخل اسمك:
        <input
              value={this.state.name}
              onChange={this.handelChange}
              name="name"
              type="text"
            />
          </label>
          <label>
            أدخل عنوانك:
        <input
              value={this.state.address}
              onChange={this.handelChange}
              type="text"
              name="address"
            />
          </label>
          <label>
            الهاتف المحمول:
        <input
              value={this.state.phone}
              onChange={this.handelChange}
              style={{ width: '43%' }}
              type="text"
              name="phone"
            />
          </label>
          <Select onChange={this.handelPaymentMerthod}>
            <Option value="3">عند الاستلام</Option>
            <Option value="4">الدفع بالبطاقات</Option>
          </Select>
          <button
            disabled={!(name && phone && address)}
            onClick={this.nextStep}
          >
            التالي
      </button>
        </form>
      </div>
    )
    // const src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    // return checkoutId ? (
    //   <div style={{ display: 'flex', height: '' }}>
    //     {!form && (

    //     )}
    //     {form && (
    //       <div style={{ width: '50%' }} className="pay-div">
    //         <Script
    //           url={src}
    //           onCreate={() => { }}
    //           onError={() => { }}
    //           onLoad={this.onLoad}
    //         />

    //         {scriptLoaded && (
    //           <form
    //             action="/redirect-checkout"
    //             className="paymentWidgets"
    //             data-brands="VISA MASTER AMEX"
    //           />
    //         )}
    //       </div>
    //     )}
    //   </div>
    // ) : (
    //     <div className="saved-offer__spinner">
    //       {' '}
    //       <Spinner animation="border" variant="info" />
    //     </div>
    //   );
  }
}
export default CheckoutForm;
