import * as yup from 'yup';

export const CONSTANT_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .min(5)
    .max(30)
    .matches(/^[A-Z][a-z]*$/, 'First name must started with capital letter ...')
    .required(),
});
