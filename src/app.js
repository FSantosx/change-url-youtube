const express = require('express')
const path = require("path");
const app = express()
const routes = require('./routes/route')
const port = 3000

app.use(routes)
app.use(express.static('public/'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))