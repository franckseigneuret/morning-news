import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScreenHome from './ScreenHome';
import ScreenSource from './ScreenSource';
import ScreenMyArticles from './ScreenMyArticles';
import ScreenArticlesBySource from './ScreenArticlesBySource';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={ScreenHome} />
        <Route path="/screensource" component={ScreenSource} />
        <Route path="/screenmyarticles" component={ScreenMyArticles} />
        <Route path="/screenarticlesbysource/:id" component={ScreenArticlesBySource} />
      </Switch>

    </Router>
  );
}

export default App;
