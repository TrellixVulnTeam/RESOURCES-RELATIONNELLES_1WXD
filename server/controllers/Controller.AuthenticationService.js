const MD5 = require('crypto-js/md5');
let User = null
module.exports = function (app, jwt, mongoose) {
  User = require('./Controller.Users.js')(app, jwt, mongoose, User);
  //------------------------------------------------------------------- Register -------------------------------------------------------------------//
  app.post('/register', (req, res) => {

    User.findOne({ mailUser: req.body.mailUser }, function (err, obj) {

      if (err) {
        throw err
      } else {
        if (obj == null) {
          let hash = MD5(req.body.passwordUser);
          let newUser = new User({
            lastnameUser: `${req.body.nomUser}`,
            firstnameUser: `${req.body.prenomUser}`,
            mailUser: `${req.body.mailUser}`,
            passwordUser: hash,
            roleUser: 1,
          })

          newUser.save(function (err) {
            if (err) { throw err; }
          });
          res.send("ok")
        } else {
          res.send("Adresse email déjà utilisée !")
        }
      }
    })
  })
  //------------------------------------------------------------------- Connexion -------------------------------------------------------------------//
  // Role User : 
  /*
  * non connecté = 0
  * citoyen connecté = 1 
  * modérateur = 2
  * admin = 3
  * superadmin = 4
  *
  *
  */

  app.post('/login', (req, res) => {
    User.findOne({ mailUser: req.body.mailUser }, function (err, obj) {
      console.log(obj)
      if (err) {
        throw err
      } else {
        if (obj != null) {
          if (obj.passwordUser == MD5(req.body.passwordUser)) {
            const accessToken = jwt.sign(obj.toJSON(), process.env.ACCESS_TOKEN_SECRET)
            res.json({
              accessToken: accessToken,
              accesRole: obj.roleUser
            })
          }
        }
      }
    })
  })

  //------------------------------------------------------------------- CurrentUser -------------------------------------------------------------------//

  app.post('/getCurrentUser', (req, res) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          User.findById({ _id: user._id }, function (err, obj) {
            if (err) {
              throw err
            } else {
              if (obj != null) {
                res.send({
                  UserNom: obj.lastnameUser,
                  UserPrenom: obj.firstnameUser,
                  UserMail: obj.mailUser
                })
              }
            }
          })
        }
      })
    }
  })

}
