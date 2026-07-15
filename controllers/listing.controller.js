const express = require('express')
const Listing = require('../models/Listing')
const router = express.Router()

router.get('/new', async (req, res) => {
    res.render('listings/create-listing.ejs')
})

router.get('/', async (req, res) => {
    const listings = await Listing.find().populate('owner')
    res.render('listings/all-listings.ejs', { listings })
})

router.get('/:id', async (req, res) => {
    const listing = await Listing.findById(req.params.id)
    res.render('listings/listing-details.ejs', { listing })
})

router.get('/:id/edit', async (req, res) => {
    res.render('listings/edit-lising.ejs')
})

router.put('/:id', async (req, res) => {
    await Listing.findByIdAndUpdate(req.params.id, req.body).populate('user').populate('favouritedByUsers')
    res.redirect('/listings')
})

router.delete('/:id', async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id)
})

router.post('/', async (req, res) => {
    await Listing.create(req.body)
})



module.exports = router