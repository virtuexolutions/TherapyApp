import * as Yup from 'yup';
// export const loginSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//   });

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is requried !'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(8, 'Password must be at least 8 characters')
    .required('Password is required !'),
});

export const SignupSchema = Yup.object({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  lastName: Yup.string(),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is requried!'),
  // contact: Yup.number()
  //   // .matches(/^\d+$/, 'Mobile number must contain only digits')
  //   // .min(10, 'Mobile number must be at least 10 digits')
  //   // .max(15, 'Mobile number cannot exceed 15 digits')
  //   .required('Mobile number is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(8, 'Password must be at least 8 characters')
    .required('Password is required!'),
  // termsAccepted: Yup.boolean()
  //   .oneOf([true], 'You must accept the terms and conditions')
  //   .required('Required'),
});

export const forgotpasswordSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is requried !'),
});

export const forgotpassword = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(8, 'Password must be at least 8 characters')
    .required('Password is required !'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
export const changePasswordSchema = Yup.object({
  currentPassword: Yup.string().required('Currrent Password is Requried'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'New password is must be 8 charcters long')
    .max(8, 'New password is must be 8 charcters long'),
  confirmNewPassword: Yup.string()
    .required('Confirm password is requried')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

export const editProfileSchema = Yup.object({
  userName: Yup.string(),
  email: Yup.string(),
  phoneNumber: Yup.number(),
});

export const addYourCarSchema = Yup.object({
  carName: Yup.string().required('Car Name is required'),
  carModel: Yup.string().required('Car Model is required'),
  carNumber: Yup.string().required('Car Number is required'),
  carSeats: Yup.string().required('Car Seat is required'),
});
