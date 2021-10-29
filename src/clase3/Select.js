import React from 'react';

class Form extends React.Component {
  state = {
    items: [1, 3, 5, 7],
    value: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleClick = (e) => {
    const value = e.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleClick}>
          {this.state.items.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </form>
    );
  }
}

export default Form;
