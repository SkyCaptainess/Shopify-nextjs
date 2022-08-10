import { ApolloServer } from "apollo-server-micro"
import { schema } from '../../graphql-shopify/schema';
import { createContext } from '../../graphql-shopify/context';

const server = new ApolloServer({
    context: createContext,
    schema,
    tracing: process.env.NODE_ENV === 'development'
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default server.createHandler({ path: "/api/graphql" });