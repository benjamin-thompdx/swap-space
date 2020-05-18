import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateItem from './components/create-item.component';
import EditItem from './components/edit-item.component';
import ItemList from './components/item-list.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h2>Swap Space</h2>
        </div> 
        <Route path='/' exact component={ItemList} />
        <Route path='/edit/:id' component={EditItem} />
        <Route path='/create' component={CreateItem} />
      </Router>
    );
  }
}

export default App;