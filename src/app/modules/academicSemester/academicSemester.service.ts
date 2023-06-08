import { AcademicSemester } from './academicSemester.model';
import { IAcademicSemester } from './academicSemester.interface';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
