const express = require('express')

const server = express()

// POST Typically for adding new data to the system
// GET Tyepically for retriving info w/o changing data
// PUT Typically for updating part of an exiting entry
// DELETE Typically for deleting data in the system

// HOW THE REQUEST WILL BE SENT
// curl --verbose "http://localhost:3000/account/5000/user/astro?date=2022-09-18&age=30"
server.get('/account/:id/user/:puppy', (req, resp) => {
    const id = req.params.id // 5000
    const puppy = req.params.puppy // "astro"
    const { date, age } = req.query // date=2022-09-18 , age=30
    resp.send({
        id: id,
        name: 'Xavier King',
        date,
        age
    })
})
//POST account/:id/user
server.post('/account/:id/user', (req, resp) => {
    const id = req.params.id
    resp.send({
        message: 'Entry created'
    })
})

//POST account/:id/user
//GET account/*  --> /account/anything
server.get(['/account/*','/account'], (req, resp) => {
    resp.send({
        id: 1,
        name: 'Xavier King',
        account: {
            balance: 100000000000,
            created: new Date()
        }
    })
})


//GET account/*  --> /account/anything
server.get('/web', (req, resp) => {
    resp.send("<html><body style='background-color:#ff0000;'><div>Hello Im alive</div></body></html>")
})
// __dirname is a global constant that will always carry the relative path of the file in which you are using it
server.get('/web/download', (req, resp) => {
    resp.download(`${__dirname}/views/index.html`)
})

server.get('/', (req, resp) => {
    resp.send(Math.random().toString())
})

server.listen(3000, '0.0.0.0', () => {
    console.log('Im alive')
})

// NETWORK -----
// [xaviers:192.168.0.4] --- [seans:192.168.0.5 -> xavier.io:3000] --- [nikkis:192.168.0.7]
// [DNS: xavier.io:3000 -> 0.0.0.0:3000]
// [routes -> allowed subnet mask]
// [xaviers.io:3000/express-example-2] --- [something:3000] -----------------[]