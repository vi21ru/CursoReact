import React from 'react';

class Fetch extends React.Component {
  state = {
    user: {},
  };

  getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    this.setState((state) => ({ user: data }));
  };

  render() {
    return (
      <>
        <p>{JSON.stringify(this.state.user)}</p>
        <button onClick={this.getData}>Obtener datos</button>
      </>
    );
  }
}

export default Fetch;
