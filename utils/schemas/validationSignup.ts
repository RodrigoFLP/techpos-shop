import * as yup from "yup";
import { string } from "yup";

const requiredMessage = "Required";

export const validationSignup = yup.object({
  firstName: yup.string().required(requiredMessage),
  lastname: yup.string().required(requiredMessage),
  phoneNumber: yup
    .string()
    .matches(/^[1-9]\d{7}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    })
    .min(8)
    .max(8)
    .required(requiredMessage),
  birthDate: yup.date().required(),
  email: yup.string().email().required(requiredMessage),
  password: yup.string().min(8).required(requiredMessage),
  state: yup.string().required(requiredMessage),
  city: yup.string().required(requiredMessage),
  addressLine1: yup.string().required(requiredMessage).min(4),
  addressLine2: yup.string().required(requiredMessage),
  addressReference: yup.string().required(),
});

export default validationSignup;
