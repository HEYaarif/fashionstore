require('dotenv').config()
const express = require('express')
const prodRoutes = require('./routes/prod.routes')
const connectToDB = require("./utils/dbconnect")
const cors = require("cors")
const dns = require("dns")
const path = require('path');

// Change DNS
dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express()

// ✅ CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// ✅ Handle preflight requests
app.options('*', cors())

// ✅ Inbuilt middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ✅ Test route
app.get('/', (req, res) => {
  res.status(200).json({ message: "FashionStore API is Running ✅" });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: "Test route is working!" });
});

// ✅ Routes
app.use('/api/v1', prodRoutes);
// ✅ Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: true, message: "Page Not Found" })
})

// ✅ Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: true, message: err.message })
})

// ✅ Start server with DB connection
const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectToDB();
    console.log("MongoDB Connected ✅")
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT ${PORT}`)
    })
  } catch (err) {
    console.log("Database Connection Error:", err.message)
    process.exit(1)
  }
}

startServer()


// http://localhost:5000/api/v1/account?email=mdaarif.dev@gmail.com