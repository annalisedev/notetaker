const express = require('express');
//const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

//point to route files
//const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use('/notes', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });