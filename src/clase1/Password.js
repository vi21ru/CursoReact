import React from 'react';
class Password extends React.Component {
  state = {
    type: 'password',
  };

  togglePassword = () => {
    this.setState({ type: !this.state.type });
  };

  render() {
    return (
      <>
        <input type={this.state.type}></input>
        <button onClick={this.show}>{this.props.text}</button>
      </>
    );
  }
}
export default Password;
