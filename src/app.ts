import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import { NextFunction } from 'connect'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
app.use('/api/v1/users', usersRouter)

// testing
// app.get('/okk', (req: Request, res: Response, next:NextFunction) => {
//   // throw new ApiError(400,'ore baba error','')
//   next('Ore baba error')
// })

// global error handler
app.use(globalErrorHandler)

export default app
