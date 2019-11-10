const dbUtils = require('./db');
const jwt = require('jsonwebtoken');

const googleCallback = (req, res) => {
  // var privateKey = fs.readFileSync('private.key');
  var token = jwt.sign({ user: req.user }, process.env.JWT_SIGN_SECRET, { expiresIn: '3d' });
  // fetch("https://www.googleapis.com/oauth2/v4/token?client_id=" + process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID + 
  // "&client_secret=" + process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET + "&code=" + tempCode)
  // .then( (res) => console.log(res) );
  // const jwt = createJWTFromUserData(req.user);
  // const jwt = req.user;
  const htmlWithEmbeddedJWT = `
  <html>
    <script>
      // Save JWT to localStorage
      window.localStorage.setItem('JWT', '${token}');
      // Redirect browser to root of application
      window.location.href = 'https://timefy-client.herokuapp.com/jwtSync';
    </script>
  </html>
  `;

  res.send(htmlWithEmbeddedJWT);
};

const jwtSync = (req, res) => {
  const syncPage = `
      <script>
      const domains = [
        "https://timefy-client.herokuapp.com",
      ]

      function messageHandler(event) {
        if (!domains.includes(event.origin))
          return;  

        const { action, key, value } = event.data;
        if (action == 'save'){
          window.localStorage.setItem(key, JSON.stringify(value))
        } 
        else if (action == 'get') {
          window.parent.postMessage({
            action: 'returnData',
            key: key,
            value: window.localStorage.getItem(key)
          }, '*');
        }
      }

      function bindEvent() {
        window.addEventListener("message", messageHandler, false);
      }

      </script>

      <img src onerror="bindEvent()" />
    `;

  res.send(syncPage);
};

const logout = (req, res) => {
  let url = "https://accounts.google.com/o/oauth2/revoke?token=";
  fetch(url + tempCode).then((res => console.log(res)));

  const logoutPage = `
    <script>

    function logout() {
      window.localStorage.removeItem('JWT');
      window.location.href = 'https://timefy-client.herokuapp.com/';
    }

    </script>

    <img src onerror="logout()" />
    `;

  res.send(logoutPage);
  // res.redirect(url + tempCode);
};

const login = async (req, res) => {
  // authData shape: {user: '<email>', password: '<password>'}
  let authData = req.body;

  let verified = await dbUtils.verifyLogin(authData);
  if (!verified)
    return res.json({ verified: false });

  var token = jwt.sign({ user: authData.user }, process.env.JWT_SIGN_SECRET, { expiresIn: '3d' });

  return res.json({ verified: true, jwt: token });

};

const verifySucceeded = async (req, res) => {
  return res.json({ verified: true });
}

module.exports = {
  callbacks: {
    google: googleCallback,
  },
  jwtSync,
  logout,
  login,
  verifySucceeded,
}