/* PACKAGES */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const LocalStrategy = require('passport-local').Strategy;
const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/jacobkenning';
const app = module.exports = express();

/* APP */
app.set('port', (process.env.PORT || 3000));
app.set('mongo', mongoClient);
app.set('url', (process.env.MONGODB_URI || mongoURI));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/build'));
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

passport.serializeUser((user, done) => { done(null, user); });
passport.deserializeUser((obj, done) => { done(null, obj); });

passport.use('local', new LocalStrategy(
  function(username, password, done) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('users');
      collection.findOne({
        username: username, password: password
      }, (err, user) => {
        if (!err) {
          done(null, user);
        } else {
          return done(err);
        }
      });
    });
  }
));

app.post('/auth/local', passport.authenticate('local'), (req, res) => {
  res.status(200).send(true);
});

app.get('/logout', function(req, res) {
  req.logout();
  res.status(200).send(true);
});

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
