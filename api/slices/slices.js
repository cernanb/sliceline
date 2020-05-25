import mongoose, { Schema } from 'mongoose'

const ReviewsSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  reviewer: {
    type: String,
    required: true
  },
  slice: {
    type: Schema.Types.ObjectId,
    ref: 'slices'
  }
})

export const SlicesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photoUrl: { type: String },
  reviews: [ReviewsSchema]
})

export default mongoose.models.slices || mongoose.model('slices', SlicesSchema)

export const Review = mongoose.models.reviews || mongoose.model('reviews', ReviewsSchema)
