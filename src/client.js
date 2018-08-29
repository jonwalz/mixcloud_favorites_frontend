import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://mixcloud-favorites-hfenubcgct.now.sh"
});

export default client;