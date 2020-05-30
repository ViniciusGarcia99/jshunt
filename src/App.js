import React from 'react';
import './styles.css';

import Routes from './routes';
import Header from './components/header';

const App = () => (
  <div className='App'>
    <Header />
    <Routes />
  </div>
);

export default App;