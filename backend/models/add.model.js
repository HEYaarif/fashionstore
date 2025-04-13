const { Schema, model } = require('mongoose')
const mongoose = require('mongoose');

let addressSchema = new Schema({
    name:String,
    number:String,
    pinCode: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: true
      }
})

module.exports = model('Address', addressSchema)
