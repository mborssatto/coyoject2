class User {
  constructor(name) {
    this.name = name
    this.favoriteEvents = []
  }

  addToFavorites(event) {
    event.favoritedBy.push(this)
    this.favoriteEvents.push(event)
  }
}

module.exports = User
