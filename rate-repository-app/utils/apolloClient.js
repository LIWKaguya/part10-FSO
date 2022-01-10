import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'

const httpLink = createHttpLink({
    uri: 'http://62.248.142.30:5000/graphql'
});

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })
}

export default createApolloClient;