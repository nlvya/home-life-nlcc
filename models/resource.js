const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide A Name."]
    },
    image: {
        type: String,
        required: [true, "Must Provide An Image."]
    },
    category: {
        type: String,
        require: [true, "Must Provide Category."]
    },
    content: {
        type: Array,
        required: [true, "Must Provide Content."]
    },
    id: {
        type: String,
        require: [true, "Must Provide an ID"]
    }
})
//This is basic validation not advanced
module.exports = mongoose.model('Resource', productSchema)