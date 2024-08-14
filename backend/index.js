import { json, urlencoded } from 'express';
import express from 'express';

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


app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});