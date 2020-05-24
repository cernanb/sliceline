import { ApolloServer, gql } from 'apollo-server-micro'
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit'
import connectDb from '../../lib/mongoose'
import { slicesResolvers } from '../../api/slices/resolvers'
import { slicesMutations } from '../../api/slices/mutations'
import Slices from '../../api/slices/Slices.graphql'

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`

const fakeResolvers = {
  Query: {
    sayHello: () => {
      return 'Hello Next'
    }
  }
}

const resolvers = mergeResolvers([fakeResolvers, slicesResolvers, slicesMutations])

const typeDefs = mergeTypeDefs([fakeTypeDefs, Slices])

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

export const config = {
  api: { bodyParser: false }
}

const server = apolloServer.createHandler({ path: '/api/graphql' })

export default connectDb(server)
