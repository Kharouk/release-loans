const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql");
const db = require("./database");

const app = Express();
app.use(bodyParser.json);

const Schema = Mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  inHouse: { type: Boolean, required: true }
});

const UserModel = Mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/users", (res, req) => {
  console.log(req.body);
  const newUser = new UserModel({
    firstName: req.body.first,
    lastName: req.body.last,
    inHouse: !!req.body.house
  });

  newUser.save((err, result) => {
    if (err) {
      console.log("Save failed: ", err);
    }
    console.log("You successfully added a user: ", result);
  });

  res.redirect("/");
});

app.listen(3333, () => {
  console.log("Server is up and running.");
});
