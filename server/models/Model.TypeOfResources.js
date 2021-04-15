module.exports = function (mongoose, TypeOfResource) {

  const TypeOfResourcesSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      Nom: String,
    }
  );

  return TypeOfResource = mongoose.model('typeofressource', TypeOfResourcesSchema);
}