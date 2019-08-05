const Express = require("express");
const ExpressGraphQL = require("express-graphql");
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
