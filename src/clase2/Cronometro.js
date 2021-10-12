import React from 'react';

class Cronometro extends React.Component {
  state = {
    chrono: 0,
  };

  interval = null;

  start = () => {
    this.interval = setInterval(
      () => this.setState((state) => ({ chrono: state.chrono + 1 })),
      1000
    );
  };

  stop = () => clearInterval(this.interval);

  render() {
    return (
      <>
        <h1>{this.state.chrono}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}

export default Cronometro;
