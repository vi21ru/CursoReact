import logo from './logo.svg';
import './App.css';

import Color from './clase3/Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Color />
      </header>
    </div>
  );
}

export default App;
