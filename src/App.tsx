import React from 'react';
import { Converter } from './components/Converter';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>Binary-to-Decimal number converter</h1>
      <Converter />
    </div>
  );
}

export default App;
