const express = require('express')
const { users } = require('../models')

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  let result = users

  if (req.query.name) {
    result = users.find(user => user.name === req.query.name)
  }
  res.send(result)
})

router.get('/:userID', function (req, res, next) {
  const user = users[req.params.userID]
  if (user) res.send(user)
  else res.sendStatus(404)
})

// router.get('/:name', (req, res) => {
//   const user = users.find(u => u.name === req.params.name)

//   if (!user)
//     return res.render('error', {
//       error: { status: 404 },
//       message: `No user with name ${req.params.name} found`,
//     })

//   return user
// })

module.exports = router
