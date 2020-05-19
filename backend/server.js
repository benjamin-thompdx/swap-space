import express from 'express';
const app = express();
import { json } from 'body-parser';
import cors from 'cors';
const PORT = 4000;

app.use(cors());
app.use(json());

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});