import logo from './logo.svg';
import './App.css';

import Select from './clase5/Select';
import ProductsPage from './clase5/Restaurant';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProductsPage />
      </header>
    </div>
  );
};

export default App;
