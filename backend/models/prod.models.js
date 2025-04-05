const {Schema, model} = require('mongoose')

let prodSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    number:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})

module.exports = model("customers", prodSchema)

// arrif 
