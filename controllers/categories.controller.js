const express = require('express')
const router = express.Router()
const Categoires = require('../models/Categories')

router.get('/new', async (req, res) => {
    res.render('create-category.ejs')
})

router.get('/', async (req, res) => {
    const categories = await Categoires.find()
    res.render('all-categories.ejs', { categories })
})

router.post('/', async (req, res) => {
    await Categoires.create(req.body)
    res.redirect('/categories')
})

module.exports = router