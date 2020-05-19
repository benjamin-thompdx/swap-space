const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
  item_name: {
    type: String
  },
  item_description: {
    type: String
  },
  item_image: {
    type: String
  },
  item_zipCode: {
    type: String
  },
  item_value: {
    type: String
  },
  item_traded: {
    type: Boolean
  }
});

module.exports = mongoose.model('Item', Item);