import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import commentRoutes from './routes/comments.js'
import videoRoutes from './routes/videos.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((error) => {
      throw error
    })
}

app.use(express.json())
app.use(cookieParser());
app.use('/api/users', userRoutes)
app.use('/api/comments', videoRoutes)
app.use('/api/videos', commentRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

app.listen(8080, () => {
  connect()
  console.log('Connected to port 8080')
})
