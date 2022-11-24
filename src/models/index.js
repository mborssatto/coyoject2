const User = require('./user')
const Event = require('./event')

let event
const eventOne = new Event('Festival One', ['Maria Bethânia', 'Cateano Veloso'], '2022-11-29', 'HKW', 'Berlin')
const eventTwo = new Event('Festival two', ['Mulatu Astatke'], '2022-12-09', 'HKW', 'Berlin')
const events = [eventOne, eventTwo]

// User input
const dateRangeStart = '2022-11-01'
const dateRangeEnd = '2022-12-08'
const city = 'Berlin'

function filter(el) {
  return el.date >= dateRangeStart && el.date <= dateRangeEnd && el.city === city
}

const filteredList = events.filter(filter)

console.log(eventOne.detail)
console.log(filteredList)
console.log(eventOne)
console.log(eventTwo)
