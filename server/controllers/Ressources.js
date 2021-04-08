  import Ressources from "./models/Ressource"

//------------------------------------------------------------------- Ressources -------------------------------------------------------------------//


app.post('/addRessource', (req, res) => {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          let newRessource = new Ressources({
            title: `${req.body.titleRessource}`,
            content: `${req.body.contentRessource}`,
            categories: `${req.body.categoriesRessource}`,
            datePublication: Date.now(),
            UserId: user._id,
          })
  
          newRessource.save(function (err) {
            if (err) { throw err; }
          });
          res.send("ajouté")
        }
      })
    }
  
  })

//------------------------------------------------------------------- Ressources - Get All -------------------------------------------------------------------//



app.post('/getAllRessources', (req, res) => {

    Ressources.find({}, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })

//------------------------------------------------------------------- Ressources - Get All by Categories -------------------------------------------------------------------//

app.post('/RessourceByCat', (req, res) => {
    Ressources.find({ categories: req.body.NomCat }, function (err, obj) {
      if (err) {
        throw err
      } else {
        res.send(obj)
  
      }
    })
  })
 
  //------------------------------------------------------------------- Ressources - Get User Ressource -------------------------------------------------------------------//

app.post('/getUserRessources', (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      return res.status(401)
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
          return res.status(403)
        } else {
          Ressources.find({ "UserId": user._id }, function (err, obj) {
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
  //------------------------------------------------------------------- Ressources - Delete -------------------------------------------------------------------//



app.post('/deleteRessources', (req, res) => {
    console.log(req.body.RessourceId)
    Ressources.deleteOne({ _id: req.body.RessourceId }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Ressource supprimé")
        console.log("ressource deleted")
      }
    })
  })
  
  //------------------------------------------------------------------- Ressources - GetOne -------------------------------------------------------------------//
  
  
  
  app.post('/getOneRessource', (req, res) => {
    Ressources.findOne({ _id: req.body.RessourceId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })
  
  
  //------------------------------------------------------------------- Ressources - Edit -------------------------------------------------------------------//
  
  
  
  app.post('/editRessource', (req, res) => {
    Ressources.updateOne({ _id: req.body.idRessource }, { title: req.body.titleRessource, content: req.body.contentRessource, categories: req.body.categoriesRessource }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          console.log("Upadting !")
        }
      }
    })
  })