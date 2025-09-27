import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//database connection
await connectDB()


app.get('/', (req, res) => {
  res.send('API WORKING')
})


app.use('/api/user' , userRouter)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

