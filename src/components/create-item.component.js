import React, { Component } from 'react';

export default class CreateItem extends Component {

  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this)
    this.onChangeItemZipCode = this.onChangeItemZipCode.bind(this)
    this.onChangeItemValue = this.onChangeItemValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item_name: '',
      item_description: '',
      item_image: '',
      item_zipCode: '',
      item_value: '',
      item_traded: false
    }
  }

  onChangeItemName(e) {
    this.setState({
      item_name: e.target.value
    });
  }

  onChangeItemDescription(e) {
    this.setState({
      item_description: e.target.value
    });
  }

  onChangeItemImage(e) {
    this.setState({
      item_image: e.target.value
    });
  }

  onChangeItemZipCode(e) {
    this.setState({
      item_zipCode: e.target.value
    });
  }

  onChangeItemValue(e) {
    this.setState({
      item_value: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submited:`);
    console.log(`Item Name: ${this.state.item_name}`);
    console.log(`Item Description: ${this.state.item_description}`);
    console.log(`Item Image: ${this.state.item_image}`);
    console.log(`Item Zip Code: ${this.state.item_zipCode}`);
    console.log(`Item Value: ${this.state.item_value}`);
    console.log(`Item Traded: ${this.state.item_traded}`);
    //onSubmit logic will go here

    this.setState({
      item_name: '',
      item_description: '',
      item_image: '',
      item_zipCode: '',
      item_value: '',
      item_traded: false
    })
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Create New Item</h3>
        <form onSubmit={this.onSubmit}>
        <div className='form-group'>
            <label>Name: </label>
            <input  type='text'
                    className='form-control'
                    placeholder='Name'
                    value={this.state.item_name}
                    onChange={this.onChangeItemName}
                    />
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input  type='text'
                    className='form-control'
                    placeholder='Description'
                    value={this.state.item_description}
                    onChange={this.onChangeItemDescription}
                    />
          </div>
          <div className='form-group'>
            <label>Image: </label>
            <input  type='text'
                    className='form-control'
                    placeholder='Enter image link'
                    value={this.state.item_image}
                    onChange={this.onChangeItemImage}
                    />
          </div>
          <div className='form-group'>
            <label>Zip Code: </label>
            <input  type='text'
                    className='form-control'
                    placeholder='Enter zip code'
                    value={this.state.item_zipCode}
                    onChange={this.onChangeItemZipCode}
                    />
          </div>
          <div className='form-group'>
            <div className='form-check form-check-inline'>
              <input  className='form-check-input'
                      type='radio'
                      name='valueOptions'
                      id='valueLow'
                      value='Low'
                      checked={this.state.item_value==='Low'}
                      onChange={this.onChangeItemValue}
                      />
              <label className='form-check-label'>$0-$40</label>
            </div>
            <div className='form-check form-check-inline'>
              <input  className='form-check-input'
                      type='radio'
                      name='valueOptions'
                      id='valueMedium'
                      value='Medium'
                      checked={this.state.item_value==='Medium'}
                      onChange={this.onChangeItemValue}
                      />
              <label className='form-check-label'>$40-$80</label>
            </div>
            <div className='form-check form-check-inline'>
              <input  className='form-check-input'
                      type='radio'
                      name='valueOptions'
                      id='valueHigh'
                      value='High'
                      checked={this.state.item_value==='High'}
                      onChange={this.onChangeItemValue}
                      />
              <label className='form-check-label'>$80-$120+</label>
            </div>
          </div>
          <div className='form-group'>
            <input type='submit' value='Create Item' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    )
  }
}