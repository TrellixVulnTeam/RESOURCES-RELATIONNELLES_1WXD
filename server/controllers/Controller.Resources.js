let Resource = null;

module.exports = function (app, jwt, mongoose) {
  Resource = require('../models/Model.Resources.js')(mongoose, Resource);
//------------------------------------------------------------------- Resources - Add One -------------------------------------------------------------------//
app.post('/addResource', (req, res) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          let newResource = new Resource({
            title: `${req.body.titleResource}`,
            content: `${req.body.contentResource}`,
            categories: `${req.body.categoriesResource}`,
            datePublication: Date.now(),
            UserId: user._id,
          })
  
          newResource.save(function (err) {
            if (err) { throw err; }
          });
          res.send("ajouté")
        }
      })
    }
  
  })

//------------------------------------------------------------------- Resources - Get All -------------------------------------------------------------------//



app.post('/getAllResources', (req, res) => {

  Resource.find({}, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })

//------------------------------------------------------------------- Resources - Get All by Categories -------------------------------------------------------------------//

app.post('/ResourceByCat', (req, res) => {
  Resource.find({ categories: req.body.NomCat }, function (err, obj) {
      if (err) {
        throw err
      } else {
        res.send(obj)
  
      }
    })
  })
 
  //------------------------------------------------------------------- Resources - Get User Resource -------------------------------------------------------------------//

app.post('/getUserResources', (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          Resource.find({ "UserId": user._id }, function (err, obj) {
            if (err) {
              throw err
            } else {
              if (obj != null) {
                res.send(obj)
              }
            }
          })
        }
      })
    }
  
  })
  //------------------------------------------------------------------- Resources - DeleteOne -------------------------------------------------------------------//



app.post('/deleteResource', (req, res) => {
    console.log(req.body.ResourceId)
    Resources.deleteOne({ _id: req.body.ResourceId }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Ressource supprimé")
        console.log("resource deleted")
      }
    })
  })
  
  //------------------------------------------------------------------- Resource - GetOne -------------------------------------------------------------------//
  
  
  
  app.post('/getOneResource', (req, res) => {
    Resource.findOne({ _id: req.body.ResourceId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })
  
  
  //------------------------------------------------------------------- Resource - EditOne -------------------------------------------------------------------//
  
  
  
  app.post('/editResource', (req, res) => {
    Resource.updateOne({ _id: req.body.idResource }, { title: req.body.titleResource, content: req.body.contentResource, categories: req.body.categoriesResource }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          console.log("Upadting !")
        }
      }
    })
  })
}