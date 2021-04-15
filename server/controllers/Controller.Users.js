module.exports = function(app, jwt, mongoose, User){
  User = require('../models/Model.Users.js')(mongoose, User);
  
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
  
  //------------------------------------------------------------------- Update Current User -------------------------------------------------------------------//
   app.post('/UpdateCurrentUser', (req, res) => {   
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          User.updateOne({ _id: user._id }, { lastnameUser: req.body.nomUser, firstnameUser: req.body.prenomUser, mailUser: req.body.mailUser }, function (err, obj) {
            if (err) {
              throw err
            } else {
              if (obj != null) {
                res.send(true)
              }
            }
          })
        }
      })
    }
  })
  return User;
}