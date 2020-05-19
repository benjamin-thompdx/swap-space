import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateItem from './components/create-item.component';
import EditItem from './components/edit-item.component';
import ItemList from './components/item-list.component';

import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>

          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='https://benjaminthompdx.wordpress.com/' target='blank'>
              <img src={logo} width='120' height='120' alt='benjaminthompdx.wordpress.com' />
            </a>
            <Link to='/' className='navbar-brand'>A Neighborhood Trading Space</Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>Items</Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>Create Item</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path='/' exact component={ItemList} />
          <Route path='/edit/:id' component={EditItem} />
          <Route path='/create' component={CreateItem} />
        </div> 
      </Router>
    );
  }
}

export default App;