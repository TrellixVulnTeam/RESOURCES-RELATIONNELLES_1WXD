
const UserSchema = mongoose.Schema(
    {
      //_id: mongoose.ObjectId,
      firstnameUser: String,
      lastnameUser: String,
      mailUser: String,
      passwordUser: String,
      roleUser: Number,
    }
  );

  let User = mongoose.model('user', UserSchema);