const express = require('express')
const fs = require('fs');

const app = express()
// curl --verbose http://localhost:4001/fisting_pup
// the route path can be anything you want
app.get('/fisting_pup', (req, reply) => {
    
    if(req.headers["accept"] === "image/jpeg") {

        fs.readFile('/Users/desktop/background.jpeg', 'utf8', (err, data) => {
            if (err) {
                reply.statusCode(400)
                reply.send(err.message)
                return;
            }
            // reply.setHeader('content-type', 'application/json')
            reply.send({"data": 1})
        
        });
    } else {
        reply.statusCode(405)
        reply.send('I only send image/jpeg I dont send: ' + req.headers["accept"])
        // THIS setHeader line wont be sent back as part of the response because reply.send(...) will commit the response and send it back
        reply.setHeader('x-daddys-response', 'im here')
    }

})
// curl --verbose http://localhost:4001/async_services
app.get('/asyn_services', async (req) => {
    
    return 'Async service did its job'
})

app.listen(4001, () => { console.log('Im ready') })