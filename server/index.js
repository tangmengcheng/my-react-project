const express = require('express')
const app = express()

app.get('/api/user', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.send({
        name: 'tmc',
        age: 25
    })
})

app.listen(3000, () => {
    console.log('app listen port 3000')
})