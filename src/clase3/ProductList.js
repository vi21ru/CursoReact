import React from 'react';

const ProductList = (props) =>
  props.products.map((product) => (
    <div key={product.id}>
      <img src={product.img} alt="iphone" height="100" />
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      {props.action(product)}
    </div>
  ));

export default ProductList;
