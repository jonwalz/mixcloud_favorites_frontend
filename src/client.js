import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://mixcloud-favorites-iksiwbkwxe.now.sh/"
});

export default client;