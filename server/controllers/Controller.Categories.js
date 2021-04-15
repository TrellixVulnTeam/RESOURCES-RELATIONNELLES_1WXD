let Categorie = null;

module.exports = function (app, mongoose) {
  Categorie = require('../models/Model.Categories.js')(mongoose, Categorie);
  //------------------------------------------------------------------- Categorie - Add -------------------------------------------------------------------//
  //console.log('check');
  app.post('/addCategorie', (req, res) => {

    let newCategorie = new Categorie({
      Nom: `${req.body.nameCat}`,
    })
    newCategorie.save(function (err) {
      if (err) { throw err; }
    });
    res.send("Ajouté")
  })

  //------------------------------------------------------------------- Categorie - Delete -------------------------------------------------------------------//



  app.post('/DeleteCategorie', (req, res) => {
    Categorie.deleteOne({ _id: req.body.idCategorie }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Categorie supprimé")
        console.log("Categorie deleted")
      }
    })
  })

  //------------------------------------------------------------------- Categories - Get All -------------------------------------------------------------------//

  app.post('/GetAllCategories', (req, res) => {
    Categorie.find({}, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.json(obj)
        }
      }
    })
  })

  //------------------------------------------------------------------- Categorie - Edit -------------------------------------------------------------------//

  app.post('/EditCategorie', (req, res) => {
    Categorie.updateOne({ _id: req.body.idCategorie }, { Nom: req.body.nomCategorie }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send('Updating')
        }
      }
    })
  })

  //------------------------------------------------------------------- Categorie - GetOne -------------------------------------------------------------------//



  app.post('/getOneCategorie', (req, res) => {
    Categorie.findOne({ _id: req.body.CategorieId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })
}