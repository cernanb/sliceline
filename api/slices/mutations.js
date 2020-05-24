import Slice from './slices'

export const slicesMutations = {
  Mutation: {
    async addSlice(_, { slice }) {
      const newSlice = new Slice(slice)
      await newSlice.save()
      return newSlice
    }
  }
}
