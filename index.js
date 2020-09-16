const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require('graphql-import');

// schema
const typeDefs = importSchema('schema.gql');

const resolvers = {
  Query: {
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});