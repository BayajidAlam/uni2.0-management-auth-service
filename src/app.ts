import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1', routes);

// testing
// app.get('/okk', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing error logger')
// })

// global error handler
app.use(globalErrorHandler);

export default app;
