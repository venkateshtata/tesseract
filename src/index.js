import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Artifact from './components/Artifact';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Prototyping from './components/Prototyping';
import Robotics from './components/Robotics';
import FDM from './components/FDM';
import SLA from './components/SLA';
import SLS from './components/SLS';
import CheckOut from './components/CheckOut';
import CustomCheckout from './components/CustomCheckout';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/artifact" component={Artifact}/>
      <Route path="/robotics" component={Robotics}/>
      <Route path="/prototyping" component={Prototyping}/>
      <Route path="/fdm" component={FDM}/>
      <Route path="/sla" component={SLA}/>
      <Route path="/sls" component={SLS}/>
      <Route path="/customcheckout" component={CustomCheckout}/>
      <Route path="/checkout" component={CheckOut}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
