import React, { Component } from 'react';
// import './style.css';
import ViewCart from './ViewCart';

class CartPage extends Component {
  render() {
    const { items, totalPrice, totalQty } = this.props;
    const { removeProduct, reduceOneProduct } = this.props;

    return (
      <ViewCart
        reduceOneProduct={reduceOneProduct}
        removeProduct={removeProduct}
        items={items}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
    );
  }
}
export default CartPage;
