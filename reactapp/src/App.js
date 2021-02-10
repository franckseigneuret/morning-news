import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScreenHome from './ScreenHome';
import ScreenSource from './ScreenSource';
import ScreenMyArticles from './ScreenMyArticles';
import ScreenArticlesBySource from './ScreenArticlesBySource';

import wishList from './reducers/article.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({ wishList }));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={ScreenHome} />
          <Route path="/screensource" component={ScreenSource} />
          <Route path="/screenmyarticles" component={ScreenMyArticles} />
          <Route path="/screenarticlesbysource/:id" component={ScreenArticlesBySource} />
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
