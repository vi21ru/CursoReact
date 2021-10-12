import React from 'react';
import ColorPicker from './ColorPicker';
import ColorText from './ColorText';
class Color extends React.Component {
  state = {
    color: '',
  };

  onChange = (e) => this.setState({ color: e.target.value });

  render() {
    return (
      <>
        <ColorPicker onChange={this.onChange} />
        <ColorText colorText={this.state.color} />
      </>
    );
  }
}

export default Color;
