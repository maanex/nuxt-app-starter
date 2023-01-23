import User from '../models/user'


export default defineEventHandler((event) => {
  return User.find({}).lean(true).exec()
})
