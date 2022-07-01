const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const AssetsAPI = require("./datasources/assets");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      AssetsAPI: new AssetsAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`Server is running on port 4000`);
});
