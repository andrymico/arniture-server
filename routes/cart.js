const express = require('express')
const router = express.Router()
const { addToCart, showCart, checkout } = require('../controllers/cart.controller')
const { isUser, isAdmin } = require('../middleware/auth')

router.post('/', addToCart)
router.get('/', showCart)
router.put('/:_id', checkout)

module.exports = router
