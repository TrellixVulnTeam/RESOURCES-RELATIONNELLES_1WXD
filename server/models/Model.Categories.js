module.exports = function (mongoose, Categorie) {
  console.log('check');
  const CategoriesSchema = mongoose.Schema(
  {
    //_id: mongoose.ObjectId,
    Nom: String,
  });
  
  return Categorie = mongoose.model('categorie', CategoriesSchema);
}