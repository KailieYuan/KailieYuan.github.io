import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mapper from './components/maps.js'
import Music from './components/music.js'
import Home from './container/Home.js'
import {BrowserRouter as Router, Route,Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
  <div>
  <Route exact path="/" component={ App }/>
  <Route exact path="/home" component={ Home }/>
  <Route path="/map" component={ Mapper }/>
  <Route path="/music" component={ Music }/>
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
