import * as yup from 'yup';

export const CONSTANT_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(30)
    .required(),
});
