import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const server = app.listen(3000, () => {
    console.log('Server started on port 3000')
})

server.on('error', (err) => console.error(err));