import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Daytona from './Daytona';
import HelloWorld from './HelloWorld';


const App = () => {
  return (
    <BrowserRouter>
      <HelloWorld>
        <Switch>
          <Route path="/buildingdreams" component={Daytona} />
        </Switch>
      </HelloWorld>
    </BrowserRouter>
  )
}

export default App;
