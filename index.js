require('dotenv').config()

const express = require('express');
var cors = require('cors');
// const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const jwt = require('jsonwebtoken');
// const fetchUrl = require("fetch").fetchUrl;
// const fetch = require('node-fetch');
const path = require('path');
const PORT = process.env.PORT || 5000;

// const dbUtils = require('./Utils/db');
const middlewares = require('./Utils/middlewares');
const auth = require('./Utils/auth');

const API = require('./API/index')

var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
var guard = require('express-jwt-permissions')();

let tempCode = "";

// Set up passport strategy
// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
//     callbackURL: 'https://timefy-server.herokuapp.com/auth/google/callback',
//     scope: ['email'],
//   },
//   (accessToken, refreshToken, profile, cb) => {
//     tempCode = accessToken;
//     profile.accessToken = accessToken;
//     profile.refreshToken = refreshToken;
//     console.log('Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user:', profile);
//     return cb(null, profile);
//   },
// ));

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cookieParser())
  .use((req, res, next) => {

    if (req.cookies && req.cookies.authToken) {
      try {
        req.user = jwt.verify(req.cookies.authToken, process.env.SECRET);
      }
      catch (e) {

      }
    }

    next();
  })
  .use('/static', express.static(path.join(__dirname, 'views/client/static')))
  .use('/favicon.ico', express.static(path.join(__dirname, 'views/client/favicon.ico')))
  // .use(passport.initialize())
  .use(cors())

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // .get('/', (req, res) => res.render('pages/addGuest'))
  .post('/token', express.json(), (req, res) => {
    if (req.user)
      res.sendStatus(200);

    let { password } = req.body;
    let userType;

    if (password === process.env.PASSWORD_ADMIN)
      userType = 'admin';
    else if (password && password.match(process.env.PASSWORD_REGEX))
      userType = 'user';

    if (userType) {
      res.cookie('authToken', jwt.sign({ permissions: [userType] }, process.env.SECRET, { expiresIn: '1h' }), { httpOnly: true, secure: true });
      res.sendStatus(200);
      return;
    }

    res.sendStatus(401);
  })
  .get('/verify', guard.check([['admin'], ['user']]), (req, res) => {
    res.json({ success: true });
  })
  .get('/', (req, res) => res.redirect('/client/'))
  .get('/startPage', (req, res) => res.render('pages/index'))
  .get('/test', (req, res) => { res.send('yay!'); })
  .get('/db', async (req, res) => {
    try {
      // const client = await pool.connect()
      // const result = await client.query('SELECT * FROM guests');
      // const results = { 'results': (result) ? result.rows : null};
      const results = await API.guest.allGuests();
      // console.log(results);
      res.render('pages/db', { results, count: results.length });
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })


  // Create API endpoints
  // This is where users point their browsers in order to get logged in
  // This is also where Google sends back information to our app once a user authenticates with Google
  // .get('/auth/google/callback',
  //   passport.authenticate('google', { failureRedirect: '/', session: false }),
  //   auth.callbacks.google
  // )
  // .get('/jwtSync', auth.jwtSync)
  // .get('/logout', auth.logout)
  // .post('/login', express.json(), middlewares.asyncMiddleware(auth.login))
  // .post('/verify', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(auth.verifySucceeded))

  // .get('/protected', middlewares.accessProtectionMiddleware, (req, res) => {
  //   return res.json({
  //     message: 'You have accessed the protected endpoint!',
  //     yourUserInfo: req.user,
  //   });
  // })
  // .post('/protected', middlewares.accessProtectionMiddleware, (req, res) => {
  //   return res.json({
  //     message: 'You have accessed the protected endpoint!',
  //     yourUserInfo: req.user,
  //   });
  // })

  // tasks API
  // .post('/allTasks', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(API.task.allTasks))
  // .post('/allGroups', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(API.group.allGroups))
  // .post('/totalTasksDuration', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(API.task.getTotalTasksDuration))
  // .post('/todayTasksDuration', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(API.task.getTodayTasksDuration))
  // .post('/tasksDuration', middlewares.accessProtectionMiddleware, middlewares.asyncMiddleware(API.task.getTasksDuration))
  // .post('/startTaskRecording', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.startTaskRecording))
  // .post('/stopTaskRecording', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.stopTaskRecording))
  // .post('/createTask', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.createTask))
  // .post('/createGroup', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.createGroup))
  // .post('/deleteTask', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.deleteTask))
  // .post('/archiveTask', middlewares.accessProtectionMiddleware, express.json(), middlewares.asyncMiddleware(API.task.archiveTask))

  .post('/addGuest', guard.check([['admin'], ['user']]), express.json(), middlewares.asyncMiddleware(API.guest.addGuest))
  //.post('/addGuest', middlewares.asyncMiddleware(API.guest.addGuest))
  .post('/removeGuest', guard.check([['admin']]), express.json(), middlewares.asyncMiddleware(API.guest.removeGuest))
  .post('/allGuests', guard.check([['admin']]), express.json(), middlewares.asyncMiddleware(API.guest.allGuests))
  .post('/allExpectedGuests', guard.check([['admin']]), express.json(), middlewares.asyncMiddleware(API.guest.allExpected))
  // .get('/addGuest', (req, res) => { res.send('yay!'); })
  .get('/client/*', guard.check([['admin'], ['user']]), (req, res) => { res.render('client/index.ejs'); })

  // start the server
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
  ;