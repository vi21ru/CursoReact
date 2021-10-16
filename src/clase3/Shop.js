import React from 'react';
import './../App.css';
import ProductList from './ProductList';
import products from './products';

class Shop extends React.Component {
  state = {
    selectedProducts: [],
    discountCode: '',
    applyDiscount: false,
  };

  componentDidMount() {
    if (localStorage.state) {
      this.setState(JSON.parse(localStorage.state));
    }
  }

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state);
  }

  onAddProduct = (product) => {
    this.setState({ selectedProducts: [...this.state.selectedProducts, product] });
  };

  onRemoveProduct = (product) => {
    this.setState({
      selectedProducts: this.state.selectedProducts.filter((p) => p.id !== product.id),
    });
  };

  getTotalPrice = () => {
    const result = this.state.selectedProducts.reduce((acum, next) => acum + next.price, 0);
    return this.state.applyDiscount ? result * 0.9 : result;
  };

  handleChangeDiscountCode = (e) => {
    this.setState({ discountCode: e.target.value });
  };

  onApplyDiscount = () => {
    this.setState({ applyDiscount: this.state.discountCode === 'SAVE10' });
  };

  render() {
    return (
      <>
        <h1>Shop</h1>
        <div className="shop-container">
          <div>
            Products:
            <ProductList
              products={products}
              action={(product) => <button onClick={() => this.onAddProduct(product)}>Add</button>}
            />
          </div>
          <div>
            Selected Products:
            <ProductList
              products={this.state.selectedProducts}
              action={(product) => (
                <button onClick={() => this.onRemoveProduct(product)}>Remove</button>
              )}
            />
            <h1>Total: {this.getTotalPrice()}</h1>
            <input
              value={this.state.discountCode}
              onChange={this.handleChangeDiscountCode}
              type="text"
            />
            <button onClick={this.onApplyDiscount}>Apply discount</button>
          </div>
        </div>
      </>
    );
  }
}

export default Shop;
