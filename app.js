//Assignments...
const express = require('express');
const app = express();
const data = require('./data.js');
const homePage = require('./pages/homepage.js');
const brandPage = require('./pages/brandpage.js');

// Retrieving Home Page...
app.get('/', (req, res) => {
  res.send(homePage(data));
});

//Retrieving Specific Brand Page...
app.get('/:id', (req, res) => {
  const id = req.params.id;
  const brandInfo = data[0];
  console.log(brandInfo);
  res.send(brandPage(brandInfo));
});

//Listening to PORT...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});