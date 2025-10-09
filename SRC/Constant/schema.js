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

export const profileSetupSchema = Yup.object().shape({
  clinic_name: Yup.string().required('Clinic Name is required'),
  description: Yup.string()
    .required('Description is required')
    .min(20, 'Description must be at least 20 characters long'),
  location: Yup.string().required('Location is required'),
  services_offered: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one service must be selected')
    .required('Services are required'),
  languages_spoken: Yup.array()
    .of(Yup.string())
    .min(1, 'At least one language must be selected'),
  logo: Yup.mixed().nullable(),
  before_after_images: Yup.array()
    .max(20, 'You can upload up to 20 images'),
  google_reviews_link: Yup.string()
    .url('Invalid Google review link')
    .nullable(),
  trustpilot_link: Yup.string()
    .url('Invalid Trustpilot link')
    .nullable(),
  testimonials: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required('Patient name is required'),
        review: Yup.string().required('Review is required'),
        image: Yup.mixed().nullable(),
      })
    )
    .min(3, 'At least 3 testimonials required')
    .nullable(),
  availability_calendar: Yup.string().nullable(),
  inquiry_email: Yup.string()
    .email('Invalid email format')
    .nullable(),
  }).test(
  'review-or-testimonial',
  'Provide either Google/Trustpilot link or 3–5 testimonials',
  (values) => {
    return (
      values.google_reviews_link ||
      values.trustpilot_link ||
      (values.testimonials && values.testimonials.length >= 3)
    );
  }
);
