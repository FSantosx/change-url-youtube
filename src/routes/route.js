const path = require('path')
const route = require('express').Router()

route.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '../../../public/index.html'))
})

module.exports = route;