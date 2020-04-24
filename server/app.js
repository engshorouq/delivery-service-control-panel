const express = require('express');
const path = require('path');
const compression = require('compression');
const upload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const SqlStore = require('connect-pg-simple')(session);
const cookie = require('cookie-parser');
const bodyParser = require('body-parser');

const cors = require('cors');
const pgPool = require('./database/config/dbConnection');

const controller = require('./controller');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(cookie());
app.use(session({
  secret: 'trff',
  resave: false,
  saveUninitialized: false,
  store: new SqlStore({
    pool: pgPool,
  }),
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
app.set('port', process.env.PORT || 4400);
app.disable('x-powered-by');
app.use(upload());
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use('/api/v1', controller);
if (process.env.NODE_ENV === 'production') {
  // # npm run build #
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  // Return all requests to our React app.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
module.exports = app;
