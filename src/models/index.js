const User = require('./user')

const armagan = new User('armagan', 20)
const steve = new User('steve', 22)

const users = [armagan, steve]

module.exports = { users }
