const express = require('express');
const app = express();

const data = require('./data.js');
const homePage = require('./pages/homepage.js');
const brandPage = require('./pages/brandpage.js');

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Test Page</title>
  </head>
  <body>
    <p>This is a Test</p>
  </body>
  </html>`);
}) 

app.get('/:id', (req, res) => {
  const brand = data.find(req.params.id);
  res.send(brandPage(brand));
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at https://localhost:${PORT}`);
});