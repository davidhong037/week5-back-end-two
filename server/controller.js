const houses = require('./db.json')
let globalId = 4

module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        const newHouse = {
            address,
            price,
            imageURL,
            id: globalId
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },

    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex((elem) => +elem.id === +id)

        if (houses[index].price <= 10000 && type == 'minus'){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus'){    ``
            houses[index].price = +houses[index].price + 10000
            res.status(200).send(houses)            
        } else if (type === 'minus') {
            houses[index].price = +houses[index].price - 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send('Something went wrong')
        }

    },

    deleteHouse: (req, res) => {
        const {id} = req.params
        
        let index = houses.findIndex((elem) => +elem.id === +id)

        houses.splice(index, 1)

        res.status(200).send(houses)
    }
}