const CommentsSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      idUser: String,
      idRessource: String,
      content: String,
      datePublication: String,
    }
  );

let Comment = mongoose.model('Comment', CommentsSchema)