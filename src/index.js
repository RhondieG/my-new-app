import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, 
        NavLink, 
        BrowserRouter as Router , 
        Switch,
    } from 'react-router-dom'
import App from './App'
import Users from './component/users'
import Contact from './component/contact'
import Notfound from './component/notfound'
import * as serviceWorker from './serviceWorker'

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
