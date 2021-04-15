module.exports = function(mongoose, User){
  const UsersSchema = mongoose.Schema(
      {
        //_id: mongoose.ObjectId,
        firstnameUser: String,
        lastnameUser: String,
        mailUser: String,
        passwordUser: String,
        roleUser: Number,
      }
    );

   return User = mongoose.model('user', UsersSchema);
}