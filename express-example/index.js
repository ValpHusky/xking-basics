const express = require('express')

const app = express()
// curl --verbose http://localhost:4001/fisting_pup
// the route path can be anything you want
app.get('/fisting_pup', (req, reply) => {
    reply.send('Services did its job')
})
// curl --verbose http://localhost:4001/async_services
app.get('/asyn_services', async (req) => {
    
    return 'Async service did its job'
})

app.listen(4001, () => { console.log('Im ready') })