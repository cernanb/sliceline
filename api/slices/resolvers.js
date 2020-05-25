import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import Slice from './slices'

export const slicesResolvers = {
  Query: {
    async slices() {
      try {
        const data = await Slice.find()

        return data
      } catch (e) {
        console.log('error', e)
      }
    },
    async slice(obj, args, context, info) {
      try {
        const slice = await Slice.findById(args.id)
        return slice
      } catch (e) {
        console.log('error', e)
      }
      console.log(args)
    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar',
    parseValue(value) {
      return new Date(value) // value from the client
    },
    serialize(value) {
      return value.getTime() //value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value)
      }
      return null
    }
  })
}
