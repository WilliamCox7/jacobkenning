/* PACKAGES */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const config = require('./config');
const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/jacobkenning';
const mandrill = require('node-mandrill')('');
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

/* ENDPOINTS */
app.post('/send', (req, res) => {
  var _name = req.body.name;
  var _email = req.body.email;
  var _subject = req.body.subject;
  var _messsage = req.body.message;
  sendEmail ( _name, _email, _subject, _message );
  res.status(200).send('sent!');
});

function sendEmail( _name, _email, _subject, _message) {
  mandrill('/messages/send', {
    message: {
      to: [{email: 'jakekenning@gmail.com' , name: _name}],
      from_email: _email,
      subject: _subject,
      text: _message
    }
  }, function(error, response){
    if (error) console.log( error );
    else console.log(response);
  });
}

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
