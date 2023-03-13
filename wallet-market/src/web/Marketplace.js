const axios = require('axios')

class MarketplaceController {

    listView = async (req, res) => {
        try {
            const API = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
            res.render('ListView', {info: API.data})
        } catch (err) {
            console.error(err);
            res.render('ListView', {info : null})
        }
    }

    detailView = async (req, res) => {
        let factID = req.params.id;
        try {
            const API = await axios.get(`https://cat-fact.herokuapp.com/facts/${factID}`)
            res.render('DetailView', {info: API.data})
        } catch (err) {
            console.error(err);
            res.render('DetailView', {info : null});
        }
    }

    cartView = async (req, res) => {
        let factID = req.query.id;
        try {
            const API = await axios.get(`https://cat-fact.herokuapp.com/facts/${factID}`);
            res.render('CartView', {info: API.data});
        } catch (err) {
            console.error(err);
            res.render('CartView', {info : null});
        }
    }
}

module.exports = MarketplaceController;
