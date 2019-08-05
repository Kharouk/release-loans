const express = require("express")
const ExpressGraphQL = require("express-graphql")
const bodyParser = require("body-parser")
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema
} = require("graphql")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = require("./database")
const UserModel = require("./models/User")

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
  // res.json({ message: "yo" })
})

app.post("/users", (req, res) => {
  console.log(req.body)
  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    stillInside: !!req.body.stillInside
  })

  newUser.save((err, result) => {
    if (err) {
      console.log("Save failed: ", err)
    } else {
      console.log("You successfully added a user: ", result)
    }
  })

  res.redirect("/")
})

app.listen(3333, () => {
  console.log("Server is up and running.")
})
