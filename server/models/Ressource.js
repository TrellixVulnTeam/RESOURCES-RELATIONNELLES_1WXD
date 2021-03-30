const RessourceSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      title: String,
      content: String,
      categories: String,
      datePublication: String,
      UserId: String,
    }
  );

let Ressources = mongoose.model('ressources', RessourceSchema);