const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
console.log(process.ENV)

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/addresses', require('./routes/addresses'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});