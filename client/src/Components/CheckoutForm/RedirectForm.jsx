import React, { Component } from 'react';
import Script from 'react-load-script';
import { Spinner } from 'react-bootstrap';

import queryString from 'query-string';
import Sucsses from '../Sucsses';
import Fail from '../Fail';

export default class RedirectForm extends Component {
  state = {
    success: null,
    isReady: false,
  };

  componentDidMount() {
    console.log(111, this.props, 888);
    const params = queryString.parse(this.props.location.search);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: params.id }),
    };
    fetch(`api/v1/redirect-checkout-form`, requestOptions)
      .then(res => res.json())
      .then(res => this.setState({ success: res.success, isReady: true }))
      .catch(er => {
        console.log('red', er);
      });
    // كمان دوت زن اد الاورد
  }

  render() {
    console.log(4447);
    const { success, isReady } = this.state;
    return isReady ? (
      success ? (
        <Sucsses />
      ) : (
          <Fail />
        )
    ) : (
        <div className="saved-offer__spinner">
          {' '}
          <Spinner animation="border" variant="info" />
        </div>
      );
  }
}
