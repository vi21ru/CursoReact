import React from 'react';
class ErrorContador extends React.Component {
  state = {
    Counter: 0,
  };

  increment = () => {
    this.setState((state) => ({ Counter: state.Counter + 1 }));
  };
  decrement = () => {
    this.setState((state) => ({ Counter: state.Counter - 1 }));
  };

  render() {
    if (this.state.Counter > 2) return new Error('PERO QUE HICISTE!!!');
    return (
      <>
        <h1>{this.state.Counter}</h1>
        <button onClick={this.increment}>Incremento</button>
        <button onClick={this.decrement}>Decremento</button>
      </>
    );
  }
}
export default ErrorContador;
