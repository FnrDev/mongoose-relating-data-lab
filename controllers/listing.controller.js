const express = require('express')
const Listing = require('../models/Listing')
const router = express.router()

router.get('/new', async (req, res) => {
    res.render('create-listing.ejs')
})

router.get('/', async (req, res) => {
    const listings = await Listing.find().populate('owner')
    res.render('all-listings.ejs', { listings })
})

router.get('/:id/edit', async (req, res) => {
    res.render('edit-lising.ejs')
})

router.put('/:id', async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/listings')
})

router.delete('/:id', async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id)
})

router.post('/', async (req, res) => {
    await Listing.create(req.body)
})



module.exports = router