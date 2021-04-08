import User from "./models/User"
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
  