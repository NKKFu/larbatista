import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Family } from './pages/Familia';
import { Home } from './pages/Home/index';
import * as serviceWorker from './serviceWorker';
import { GlobalContainer } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContainer />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route path={`/familia-acolhedora`} exact component={Family} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
