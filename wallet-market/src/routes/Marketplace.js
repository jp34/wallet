const express  = require('express')
const marketRouter = express.Router()
const axios = require('axios')


marketRouter.get('', async(req, res) => {

    try {
        const API = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
        res.render('Marketplace', {info: API.data})

    } catch (error) {
        if(error.response) {
            res.render('Marketplace', {info : null})
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            res.render('Marketplace', {info : null})
            console.log(error.request)
        } else {
            res.render('Marketplace', {info : null})
            console.error('Error', error.message)
        }
    }

})

marketRouter.get('/:id', async(req, res) => {
    let factID = req.params.id

    try {
        const API = await axios.get(`https://cat-fact.herokuapp.com/facts/${factID}`)
        res.render('marketSingle', {info: API.data})

    } catch (error) {
        if(error.response) {
            res.render('marketSingle', {info : null})
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request) {
            res.render('marketSingle', {info : null})
            console.log(error.request)
        } else {
            res.render('marketSingle', {info : null})
            console.error('Error', error.message)
        }
    }

})

module.exports = marketRouter