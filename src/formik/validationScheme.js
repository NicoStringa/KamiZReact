import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';

export const checkoutValidationScheme = Yup.object({
  name: Yup.string().required('Required'),
  cellphone: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

export const registerValidationScheme = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().matches(regEmail, 'Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters required')
    .required('Required'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters required')
    .required('Required'),
});
