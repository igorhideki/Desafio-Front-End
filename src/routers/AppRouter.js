import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import ComunicadosPage from '../components/ComunicadosPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ComunicadosPage} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
