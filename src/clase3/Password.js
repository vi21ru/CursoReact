import react from 'react';

class Password extends react.Component {
  state = {
    password: '',
    strength: 0,
  };

  handleChange = (e) => {
    const value = e.target.value;
    let points = 0;
    const findNumbers = () => {
      points = value.match('/[1-9]/') ? points + 1 : points;
    };
    console.log(findNumbers);
  };

  render() {
    return (
      <form>
        <input type="password" name="password" onChange={this.handleChange} />
        <p>{this.state.strength}</p>
      </form>
    );
  }
}

export default Password;
