import 'normalize.css';
import React from 'react';

import Routes from './routes';
import { GlobalStyles } from './styles';

const App = () => (
  <>
    <GlobalStyles />
    <Routes />
  </>
);

export default App;