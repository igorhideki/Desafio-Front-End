import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/style.scss';

console.log('Running...');

ReactDOM.render(<AppRouter />, document.getElementById('app'));
