//------------------------------------------------------------------- Type Of Ressource - Add -------------------------------------------------------------------//

app.post('/addTypeOfRessource', (req, res) => {


  let newTypeOfRessource = new TypeOfRessource({
    Nom: `${req.body.NameTypeOfRessource}`,
  })
  newTypeOfRessource.save(function (err) {
    if (err) { throw err; }
  });
  res.send("Ajouté")
})


//------------------------------------------------------------------- Type Of Ressource - Get All -------------------------------------------------------------------//

app.post('/GetAllTypeOfRessource', (req, res) => {
  TypeOfRessource.find({}, function (err, obj) {
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

app.post('/DeleteTypeOfRessource', (req, res) => {
  TypeOfRessource.deleteOne({ _id: req.body.idTypeOfRessource }, function (err) {
    if (err) {
      throw err
    } else {
      res.send("Ressource supprimé")
      console.log("ressource deleted")
    }
  })
})

//------------------------------------------------------------------- Type Of Ressource - GetOne -------------------------------------------------------------------//



app.post('/getOneTypeOfRessource', (req, res) => {
  TypeOfRessource.findOne({ _id: req.body.RessourceId }, function (err, obj) {
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



app.post('/EditTypeOfRessource', (req, res) => {
  TypeOfRessource.updateOne({ _id: req.body.idTypeDeRessource }, { Nom: req.body.nomTypeOFRessource }, function (err, obj) {
    if (err) {
      throw err
    } else {
      if (obj != null) {
        res.send('Updating')
      }
    }
  })
})