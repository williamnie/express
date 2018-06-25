const express = require('express')
const router = express.Router();
const router1 = express.Router();
router.get('/', (req, res) => {
    res.send('hello world')
})
router1.get('/', (req, res) => {
    res.send('hello abc')
})

module.exports = {
    router,
    router1
}