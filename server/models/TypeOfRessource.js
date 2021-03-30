const TypeOfRessourceSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      Nom: String,
    }
  );

let TypeOfRessource = mongoose.model('typeofressource', TypeOfRessourceSchema);