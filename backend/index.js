import { mongoString } from './configs/db.cnfig.js';
import { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import express from 'express';

mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});