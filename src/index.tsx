import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BecomeSponsor } from './pages/BecomeSponsor';
import { Family } from './pages/Familia';
import { Donation } from './pages/Donation';
import { Home } from './pages/Home/index';
import * as serviceWorker from './serviceWorker';
import { GlobalContainer } from './styles/global';
import { Adoption } from './pages/Adoption';
import { Contato } from './pages/Contato';
import { Sobre } from './pages/Sobre';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContainer />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route path={`/familia-acolhedora`} exact component={Family} />
        <Route path={`/seja-padrinho`} exact component={BecomeSponsor} />
        <Route path={`/doacao`} exact component={Donation} />
        <Route path={`/adoption`} exact component={Adoption} />
        <Route path={`/contato`} exact component={Contato} />
        <Route path={`/sobre`} exact component={Sobre} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
