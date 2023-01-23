import User from '../models/user'


export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = new User({
    email: body.email,
    name: body.name,
    password: 'gaming'
  })
  await user.save()

  return []
})
