import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import { generateStudentId } from './app/modules/user/user.utils';

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
//   throw new Error('Testing error logger');
// });

// global error handler
app.use(globalErrorHandler);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
  next();
});

export default app;

// const academicSemester = {
//   code: '01',
//   year: '2025',
// };

// const data = async () => {
//   const testId = await generateStudentId(academicSemester);
//   console.log(testId);
// };

// data();
