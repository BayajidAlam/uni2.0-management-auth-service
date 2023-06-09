import { AcademicSemester } from './academicSemester.model';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
