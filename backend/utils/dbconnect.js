// const {connect} = require('mongoose')

// let connectToDB = ()=>{
//     return connect(process.env.MONGO_DEV_URL);
// }

// module.exports = connectToDB


const mongoose = require('mongoose')

let isConnected = false

const connectToDB = async () => {
  if (isConnected) return  // ✅ Reuse existing connection in serverless

  await mongoose.connect(process.env.MONGO_DEV_URL, {
    serverSelectionTimeoutMS: 5000,
    bufferCommands: false,
  })

  isConnected = true
}

module.exports = connectToDB