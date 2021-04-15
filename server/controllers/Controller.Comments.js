
let Comment = null;
module.exports = function (app, jwt, mongoose) {
Comment = require('../models/Model.Comments.js')(mongoose, Comment);
//------------------------------------------------------------------- Add - Comment -------------------------------------------------------------------//
app.post('/AddComment', (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
  
  
          let newComment = new Comment({
            idUser: `${user._id}`,
            idResource: `${req.body.ResourceId}`,
            content: `${req.body.content}`,
            datePublication: Date.now(),
          })
  
          newComment.save(function (err) {
            if (err) { throw err; }
          });
          res.send("ok")
        }
      })
    }
  })
  
  //------------------------------------------------------------------- GetAll - Comment -------------------------------------------------------------------//
  
  
  app.post('/GetAllComment', (req, res) => {
    Comment.find({ idResource: req.body.ResourceId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  
  })
  
  //------------------------------------------------------------------- Delete - Comment -------------------------------------------------------------------//
    
  app.post('/DeleteComment', (req, res) => {
  
    Comment.deleteOne({ _id: req.body.idComment }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Commentaire supprimé")
        console.log("ressource deleted")
      }
    })
  })
}