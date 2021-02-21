const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ash', (req,res) => {
  res.send('Welcome Ashhad');
})

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});