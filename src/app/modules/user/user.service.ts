import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config';

import ApiError from '../../../errors/ApiError';
import { generateFacultyId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const academicSemester = {
    code: '01',
    year: '2025',
  };

  // auto generated incremental in
  const id = await generateFacultyId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  // create user
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
