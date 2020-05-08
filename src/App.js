import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './food_website/components/routes/Routes';

function App() {
  return (
    <div>
      {/* <HeaderContain /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
