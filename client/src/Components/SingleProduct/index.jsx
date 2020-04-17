import React, { Component } from 'react';
import './style.css';
import Sin from './Sin';

export default class SingleProduct extends Component {
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
        if (data[0]) this.setState({ detalis: data });
        else this.setState({ message: error.msg });
      })
      .catch(er => {
        this.setState({ message: er.message });
      });
  }

  render() {
    const objdetl = this.state.detalis[0];
    return <Sin addToCart={this.addToCartHandler} objdetls={objdetl} />;
  }
}
