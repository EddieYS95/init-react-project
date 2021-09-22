import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@modules/store';
import Home from '@pages/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
};

export default App;
