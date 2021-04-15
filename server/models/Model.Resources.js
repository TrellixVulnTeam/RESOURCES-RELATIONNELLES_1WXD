module.exports = function (mongoose, Resource) {
  const ResourcesSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      title: String,
      content: String,
      categorie: String,
      datePublication: String,
      UserId: String,
    }
  );

  return Resource = mongoose.model('resource', ResourcesSchema);
}