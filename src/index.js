const path = require('path');
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/articles', {
  useMongoClient: true
}).then(() => console.log('conneted to db'))
.catch(err => console.log(err));

// routes
const indexRoutes = require('./routes/index');

// setttings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});


//lista de videos  fuente

//parte 1
//https://www.youtube.com/watch?v=uGv9GU5RHhY

//parte 2
//https://www.youtube.com/watch?v=EnbhJI64OCY

//parte 3
// https://www.youtube.com/watch?v=0PsyOAXw9FM
// tiempo: 8:00

//parte 4
//https://www.youtube.com/watch?v=X6sQTsxLpJ0