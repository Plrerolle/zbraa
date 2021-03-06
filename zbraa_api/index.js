const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    console.log('Requesting !!');
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/users', db.postUser)

app.get('/users', db.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})