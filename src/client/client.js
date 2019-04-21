import ApolloClient from "apollo-boost";
// import defaults from "./defaults"
// import resolvers from "./resolvers"
// import typeDefs from "./typeDefs"
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
    uri: "https://mixcloud-typescript.jonwalz.now.sh/",
    cache: new InMemoryCache()
    // clientState: {
    //     defaults,
    //     resolvers,
    //     typeDefs,
    // }
});

export default client;