const express = require('express')
const { users } = require('../models')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource')
})

router.get('/:name', (req, res) => {
  const user = users.find(u => u.name === req.params.name)

  if (!user)
    return res.render('error', {
      error: { status: 404 },
      message: `No user with name ${req.params.name} found`,
    })

  return user
})

module.exports = router
