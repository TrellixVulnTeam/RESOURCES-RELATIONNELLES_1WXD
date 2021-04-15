
let TypeOfResource = null;
module.exports = function (app, mongoose) {
  TypeOfResource = require('../models/Model.TypeOfResources.js')(mongoose, TypeOfResource);
  //------------------------------------------------------------------- Type Of Ressource - Add -------------------------------------------------------------------//

  app.post('/addTypeOfResource', (req, res) => {


    let newTypeOfResource = new TypeOfResource({
      Nom: `${req.body.NameTypeOfResource}`,
    })
    newTypeOfResource.save(function (err) {
      if (err) { throw err; }
    });
    res.send("Ajouté")
  })


  //------------------------------------------------------------------- Type Of Ressource - Get All -------------------------------------------------------------------//

  app.post('/GetAllTypeOfResource', (req, res) => {
    TypeOfResource.find({}, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })

  //------------------------------------------------------------------- Type Of Ressource - Delete -------------------------------------------------------------------//

  app.post('/DeleteTypeOfResource', (req, res) => {
    TypeOfResource.deleteOne({ _id: req.body.idTypeOfResource }, function (err) {
      if (err) {
        throw err
      } else {
        res.send("Ressource supprimé")
        console.log("ressource deleted")
      }
    })
  })

  //------------------------------------------------------------------- Type Of Ressource - GetOne -------------------------------------------------------------------//

  app.post('/getOneTypeOfResource', (req, res) => {
    TypeOfResource.findOne({ _id: req.body.RessourceId }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send(obj)
        }
      }
    })
  })

  //------------------------------------------------------------------- Type Of Ressource - Edit -------------------------------------------------------------------//



  app.post('/EditTypeOfResource', (req, res) => {
    TypeOfResource.updateOne({ _id: req.body.idTypeDeRessource }, { Nom: req.body.nomTypeOFResource }, function (err, obj) {
      if (err) {
        throw err
      } else {
        if (obj != null) {
          res.send('Updating')
        }
      }
    })
  })
}