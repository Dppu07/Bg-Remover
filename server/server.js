
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

const PORT = process.env.PORT || 3000
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
try {
  await connectDB()
} catch (error) {
  console.error('Failed to start server:', error)
  process.exit(1)
}

// API Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
