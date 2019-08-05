const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  stillInside: { type: Boolean, required: true }
})

const UserModel = Mongoose.model("User", userSchema)

module.exports = UserModel
