const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide A Name."]
    },
    card_image: {
        type: String,
        required: [true, "Must Provide An Image."]
    },
    content: {
        type: Array,
        required: [true, "Must Provide Content."]
    }
})
//This is basic validation not advanced
module.exports = mongoose.model('Resource', productSchema)