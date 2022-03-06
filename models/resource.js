const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide A Name."]
    },
    resources: {
        type: Array,
        required: [true, "Must Provide Resources."]
    }
})
//This is basic validation not advanced
module.exports = mongoose.model('Resource', productSchema)