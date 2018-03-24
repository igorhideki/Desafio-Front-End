import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <p>404 - <Link to="/">Voltar para início</Link></p>
  </div>
);

export default NotFoundPage;
