import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from './views/Contact.view';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </div>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/contato'} exact component={Contact} />
        <Route component={NotFound404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
