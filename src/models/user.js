class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.songs = ['one', 'two', 'three']
  }

  get profile() {
    return `${this.name} (${this.age}), Bio: ${this.bio}`
  }
}

module.exports = User
