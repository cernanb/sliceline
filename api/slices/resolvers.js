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
    }
  }
}
