module.exports = function (mongoose, Comment) {
  const CommentsSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      idUser: String,
      idResource: String,
      content: String,
      datePublication: String,
    }
  );

  return Comment = mongoose.model('comment', CommentsSchema);
}