import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import ComunicadosPage from '../components/ComunicadosPage';
import ComunicadoDetailsPage from '../components/ComunicadoDetailsPage';
import NotFoundPage from '../components/NotFoundPage';
import AboutPage from '../components/AboutPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ComunicadosPage} exact />
        <Route path="/details/:id" component={ComunicadoDetailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
