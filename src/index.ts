interface User {
  name: string
  age: number
}

const render = (user: User) => {
  console.log(user)
}
const user = { name: 'cuog' }
render(user as User)
