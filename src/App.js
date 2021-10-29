import logo from './logo.svg';
import './App.css';

import Select from './clase5/Select';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Select />
      </header>
    </div>
  );
};

export default App;
