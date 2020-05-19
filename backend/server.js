const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = express.Router();
const PORT = 4000;

let Item = require('./item.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/items', { useUnifiedTopology: true,
useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDb database connection established successfully');
})

itemRoutes.route('/').get(function(req, res) {
  Item.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

itemRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Item.findById(id, function(err, item) {
    res.json(item);
  });
});



app.use('/items', itemRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});