import Slice from './slices'

export const slicesResolvers = {
  Query: {
    async slices() {
      const data = await Slice.find()

      return data
    }
  }
}
