const {connect} = require('mongoose')

let connectToDB = ()=>{
    return connect(process.env.MONGO_DEV_URL);
}

module.exports = connectToDB
