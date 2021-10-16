import logo from './logo.svg';
import './App.css';

import LoginHooks from './clase4/LoginHooks';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginHooks></LoginHooks>
      </header>
    </div>
  );
};

export default App;
