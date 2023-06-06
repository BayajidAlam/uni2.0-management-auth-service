import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application route
app.use('/api/v1/users', UserRoutes)

// testing
app.get('/okk', async (req: Request, res: Response, next: NextFunction) => {
  Promise.reject(new Error('Unhandled promise rejection'))
})

// global error handler
app.use(globalErrorHandler)

export default app
