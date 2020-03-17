import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "./assets/vendors/mdi/css/materialdesignicons.min.css";
import "./assets/vendors/css/vendor.bundle.base.css";
import "./assets/css/style.css";
import "index.scss";

import reducers from './reducers/index';
import indexRoutes from './routes/index.jsx';

const store = createStore(reducers, window.STATE_FROM_SERVER);
const App = () => (
    <Provider store={store}>
      <Router>
        <Switch>
          {indexRoutes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={route.component}/>;
          })}
        </Switch>
      </Router>
      {/*<Footer />*/}
    </Provider>
);


export default App;
