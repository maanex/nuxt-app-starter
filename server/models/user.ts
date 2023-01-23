import mongoose from 'mongoose'

export type UserModel = {
  email: string
  password: string
  name: string
}

const schema = new mongoose.Schema<UserModel>({
  email: { type: String },
  password: { type: String },
  name: String,
}, {
  timestamps: true,
  strict: true,
  strictQuery: true
})

export default mongoose.model('User', schema, 'users')
