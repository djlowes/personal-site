import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import About from './views/About';
import Index from './views/Index';
import NotFound from './views/NotFound';
import BucketList from './views/BucketList';
import Writing from './views/Writing';
import Clients from './views/Clients';

// All of our CSS
import './static/css/main.scss';
import "./static/css/views/modal.css";

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/writing" component={Writing} />
      <Route path="/bucket-list" component={BucketList} />
      <Route path="/worked-with" component={Clients} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
