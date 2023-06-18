import { z } from 'zod';
import { bloodGroup, gender } from '../student/student.constant';

// zod validation
const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First Name is required',
        }),
        middleName: z.string({
          required_error: 'Middle Name is required',
        }),
        lastName: z.string({
          required_error: 'Last Name is required',
        }),
      }),
      dateOfBirth: z.string({
        required_error: 'Date of Birth is required',
      }),
      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]], {
        required_error: 'Blood group is required',
      }),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      academicSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
      academicFaculty: z.string().optional(),
    }),
    guardian: z
      .object({
        fatherName: z.string().optional(),
        fatherOccupation: z.string().optional(),
        fatherContactNo: z.string().optional(),
        motherName: z.string().optional(),
        motherOccupation: z.string().optional(),
        motherContactNo: z.string().optional(),
        address: z.string().optional(),
      })
      .optional(),
    localGuardian: z
      .object({
        name: z.string().optional(),
        occupation: z.string().optional(),
        contactNo: z.string().optional(),
        address: z.string().optional(),
      })
      .optional(),
    profileImage: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
