const CategoriesSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      Nom: String,
    }
  );

let Categories = mongoose.model('categories', CategoriesSchema);