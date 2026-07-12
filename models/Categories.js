const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: { type: String, minLength: 3, maxLength: 100 }
})

const Caetgories = mongoose.model('Listing', categoriesSchema)

module.exports = Caetgories