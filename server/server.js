import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Middleware
app.use(cors())
app.use(express.json())


 



// API Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
