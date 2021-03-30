//------------------------------------------------------------------- Categories - Add -------------------------------------------------------------------//

app.post('/addCategories', (req, res) => {

    let newCategories = new Categories({
      Nom: `${req.body.nameCat}`,
    })
    newCategories.save(function (err) {
      if (err) { throw err; }
    });
    res.send("Ajouté")
  })
  
  //------------------------------------------------------------------- Categories - Delete -------------------------------------------------------------------//
  
  
  
  app.post('/DeleteCategories', (req, res) => {
    Categories.deleteOne({ _id: req.body.idCategories }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Ressource supprimé")
        console.log("ressource deleted")
      }
    })
  })
  
  //------------------------------------------------------------------- Categories - Get All -------------------------------------------------------------------//
  
  app.post('/GetAllCategories', (req, res) => {
    Categories.find({}, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.json(obj)
        }
      }
    })
  })
  
  
  //------------------------------------------------------------------- Categories - Edit -------------------------------------------------------------------//
  
  
  
  app.post('/EditCategories', (req, res) => {
    Categories.updateOne({ _id: req.body.idCategorie }, { Nom: req.body.nomCategorie }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send('Updating')
        }
      }
    })
  })
  
  //------------------------------------------------------------------- Categories - GetOne -------------------------------------------------------------------//
  
  
  
  app.post('/getOneCategories', (req, res) => {
    Categories.findOne({ _id: req.body.CategorieId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })