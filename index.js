const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AssetsAPI = require("./datasources/assets");
require("dotenv").config();

const PORT = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      AssetsAPI: new AssetsAPI(),
    };
  },
});

server
  .listen({
    port: PORT,
  })
  .then(({ url }) => {
    console.log(`Server is running on ${url}`);
  });
