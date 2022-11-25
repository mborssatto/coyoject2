const express = require('express')
const { events } = require('../models')

const router = express.Router()

/* GET events listing 
and FILTER by CITY - WORKS with url http://localhost:3000/events?city=Berlin */

router.get('/', function (req, res, next) {
  let result = events

  if (req.query.city) {
    result = events.filter(event => event.city === req.query.city)
  }

  res.render('events', { result })
})

module.exports = router
