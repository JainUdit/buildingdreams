import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 
import App from './containers/App/App';
import Home from './containers/Home/Home';
import HelloWorld from './containers/HelloWorld/HelloWorld';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hello" component={HelloWorld} />
        </Switch>
      </App>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
