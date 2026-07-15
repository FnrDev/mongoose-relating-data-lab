const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, min: 1 },
    size: { type: Number, min: 1 },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    favouritedByUsers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing