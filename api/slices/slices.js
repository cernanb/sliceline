import mongoose, { Schema } from 'mongoose'

export const SlicesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photoUrl: { type: String }
})

export default mongoose.models.slices || mongoose.model('slices', SlicesSchema)
