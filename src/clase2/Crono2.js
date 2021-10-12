import React from 'react';

class Cronometro2 extends React.Component {
  state = {
    chrono: 0,
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

  render() {
    return (
      <>
        <h1>{this.state.chrono}</h1>
      </>
    );
  }
}

export default Cronometro2;
