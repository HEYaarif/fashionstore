const express = require('express')
const prodRoutes = require('./routes/prod.routes')
const connectToDB = require("./utils/dbconnect")
require('dotenv').config()
const cors = require("cors");


//& Creating express app
const app = express()

app.use(cors({
  origin: ["https://your-app-name.vercel.app"],  // replace with your actual Vercel frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//& inbuilt middleware
app.use(express.json())

app.get('/test', (req, res) => {
  res.status(200).json({ message: "Test route is working!" });
});

//& routes
app.use('/api/prod', prodRoutes);


//& Page Not Found (404)
// app.use("*", (req, res)=>{
//   res.status(404).json({error:true, message:"Page Not Found"})
// })


//& server errors
app.use((err, req, res, next) => {
  res.status(500).json({ error: true, message: err.message })
})


let startServer = async () => {
  try {
      await connectToDB();
      console.log("MongoDB connected successfully")

  } catch (err) {
      console.log("Database Connection Error:", err.message)
  }
}

app.listen(process.env.PORT,() => {
  console.log(`Server is Running on PORT ${process.env.PORT}`)
  
})

startServer()
