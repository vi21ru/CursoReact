import { changeOrderByPrice, getPriceColor } from './helpers';
import React, { useState } from 'react';

export default class ProductsPage extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Chachopo',
        price: 30,
      },
      {
        id: 3,
        name: 'Navajas',
        price: 25,
      },
      {
        id: 2,
        name: 'Chorizo a la sidra',
        price: 15,
      },
    ],
  };

  onChangeOrder = () => {
    this.setState({ products: changeOrderByPrice(this.state.products) });
  };

  render() {
    return (
      <>
        <h1>Products</h1>
        <button onClick={this.onChangeOrder}>Change order</button>
        {this.state.products.map((product) => (
          <div key={product.id} style={{ color: getPriceColor(product.price) }}>
            {product.name} - {product.price}
          </div>
        ))}
      </>
    );
  }
}
