import React from 'react';

class Cronometro3 extends React.Component {
  state = {
    chrono: 0,
    show: true,
  };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState((state) => ({ chrono: state.chrono + 1 })),
      1000
    );
  }

  componentWillUnmount() {
    this.interval = clearInterval(this.interval);
  }

  _handleClick = () => {
    this.setState((state) => ({ show: !this.state.show }));
  };

  render() {
    return (
      <>
        <h1>{this.state.show && this.state.chrono}</h1>
        <button onClick={this._handleClick}>Toggle</button>
      </>
    );
  }
}

export default Cronometro3;
