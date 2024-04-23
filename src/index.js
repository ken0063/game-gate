import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import config from './config/index.js';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

//server setup

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: config?.serverPort || 4000
    }
})

console.log(`🚀 Server ready at ${url}`);