import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Card from './CardUI';

import './card-style.css';

class ProductsCard extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="container-fluid d-flex justify-content-center mr-30">
        <div className="row">
          {items ? (
            items.map(item => {
              return <Card itemobj={item} />;
            })
          ) : (
            <div className="saved-offer__spinner">
                {' '}
                <Spinner animation="border" variant="info" />
              </div>
            )}
        </div>
      </div>
    );
  }
}
export default ProductsCard;
