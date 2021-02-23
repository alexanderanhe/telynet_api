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

var allowedOrigins = ['http://localhost:4200',
                      'https://telynet.herokuapp.com'];
// middlewares
app.use(morgan('dev'));
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/addresses', require('./routes/addresses'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});