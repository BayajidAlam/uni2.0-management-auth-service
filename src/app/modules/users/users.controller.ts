import usersService from './users.service'
import { NextFunction, Request, Response } from 'express'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error) {
    // res.status(400).json({
    //   success: false,
    //   message: 'Failed to create user',
    // })
    next(error)
  }
}

export default {
  createUser,
}
