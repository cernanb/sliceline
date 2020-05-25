import Slice from './slices'
import { Review } from './slices'

export const slicesMutations = {
  Mutation: {
    async addSlice(_, { slice }) {
      const newSlice = new Slice(slice)
      await newSlice.save()
      return newSlice
    },
    async addReview(_, args, ctx) {
      const slice = await Slice.findById(args.sliceId)
      const newReview = await Review.create({ ...args.review, createdAt: Date.now(), slice: slice })
      slice.reviews.push(newReview)
      await slice.save()
      return slice
    }
  }
}
