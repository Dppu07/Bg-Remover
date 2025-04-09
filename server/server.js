import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

const PORT = process.env.PORT || 3000
const app = express()

// Middleware
app.use(cors())
app.use(express.json())
await connectDB()
//Api Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

        app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
                   