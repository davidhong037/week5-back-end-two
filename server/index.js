const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const controller = require('./controller')

app.get('/api/houses', controller.getAllHouses)
app.post('/api/houses', controller.createHouse)
app.put('/api/houses/:id', controller.updateHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

app.listen(4004, () => console.log('4004 is working fasho'))