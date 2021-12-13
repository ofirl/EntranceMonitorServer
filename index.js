require("dotenv").config();

const express = require("express");
const jwt = require("express-jwt");
const TENANT_ID = "78820852-55fa-450b-908d-45c0d911e76b";
const CLIENT_ID = "9295e29e-4a50-4352-b216-990f1b0fa03c";
const cors = require("cors");
const jwks = require("jwks-rsa");
const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://login.microsoftonline.com/${TENANT_ID}/discovery/keys?appid=${CLIENT_ID}`,
  }),

  // Validate the audience and the issuer.
  audience: CLIENT_ID,
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0`,
  algorithms: ["RS256"],
});

const path = require("path");
const PORT = process.env.PORT || 5001;
const middlewares = require("./Utils/middlewares");
const API = require("./API/index");
const guard = require("express-jwt-permissions")({
  permissionsProperty: "roles",
});

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(checkJwt)
  .use("/static", express.static(path.join(__dirname, "views/client/static")))
  .use(
    "/favicon.ico",
    express.static(path.join(__dirname, "views/client/favicon.ico"))
  )
  .use(
    cors({
      origin: [
        "http://localhost:4200",
        "https://brave-cliff-0f73fe710.azurestaticapps.net",
      ],
      credentials: true,
    })
  )

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.redirect("/client/login/"))
  .get("/startPage", (req, res) => res.render("pages/index"))
  .get("/test", guard.check([["admin"]]), (req, res) => {
    res.json({ string: "Anton the king" });
  })
  .get("/db", async (req, res) => {
    try {
      // const client = await pool.connect()
      // const result = await client.query('SELECT * FROM guests');
      // const results = { 'results': (result) ? result.rows : null};
      const results = await API.guest.allGuests();
      // console.log(results);
      res.render("pages/db", { results, count: results.length });
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

  .post(
    "/addGuest" /*, guard.check([['admin'], ['user']])*/,
    middlewares.asyncMiddleware(API.guest.addGuest)
  )
  //.post('/addGuest', middlewares.asyncMiddleware(API.guest.addGuest))
  .post(
    "/removeGuest",
    guard.check([["admin"]]),
    middlewares.asyncMiddleware(API.guest.removeGuest)
  )
  .post(
    "/allGuests",
    guard.check([["admin"]]),
    middlewares.asyncMiddleware(API.guest.allGuests)
  )
  .get(
    "/allExpectedGuests",
    guard.check([["admin"]]),
    middlewares.asyncMiddleware(API.guest.allExpected)
  )
  // .get('/addGuest', (req, res) => { res.send('yay!'); })
  .get("/client/login", (req, res) => {
    res.render("client/index.ejs");
  })
  .get("/client/*", guard.check([["admin"], ["user"]]), (req, res) => {
    res.render("client/index.ejs");
  })

  // .use(function (err, req, res, next) {
  //   if (err.code === 'permission_denied') {
  //     res.redirect('/client/login');
  //   }
  //   next();
  // })

  // start the server
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
