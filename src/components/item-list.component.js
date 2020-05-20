import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
  <tr>
    <td>props.item.item_name</td>
    <td>props.item.item_description</td>
    <td>props.item.item_image</td>
    <td>props.item.item_zipCode</td>
    <td>props.item.item_value</td>
    <td>
      <Link to={'/edit/'+props.item_id}>Edit Item</Link>
    </td>
  </tr>
)

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/items/')
      .then(response => {
        this.setState({items: response.data});
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  itemList() {
    return this.state.items.map(function(currentItem, i) {
      return <Item item={currentItem} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Item List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thread>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Zip Code</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thread>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>
      </div>
    )
  }
} 