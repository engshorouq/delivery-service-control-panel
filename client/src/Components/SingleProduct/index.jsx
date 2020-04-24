import React, { Component } from 'react';
import './style.css';

import Sin from './Sin';

class SingleProduct extends Component {
  state = {
    detalis: [],
    sucsess: null,
    message: '',
  };

  addToCartHandler = prodId => {
    this.props.addToCart(prodId);
  };

  componentDidMount() {
    const productId = this.props.id;

    fetch(`/api/v1/products/detalis/${productId}`)
      .then(res => res.json())
      .then(({ data, error }) => {
        console.log(data, 'r')

        if (data[0]) this.setState({ detalis: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        console.log(44, er)
        this.setState({ message: er.message });
      });
  }

  render() {
    const objdetl = this.state.detalis[0];
    return (
      <>
        <Sin addToCart={this.addToCartHandler} objdetls={objdetl} />
      </>
    );
  }
}
export default SingleProduct;
