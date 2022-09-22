import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';

import ToDo from './containers/ToDo';

const App = () => {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
};

export default App;
