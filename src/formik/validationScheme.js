import * as Yup from "yup";

export const checkoutValidationScheme = Yup.object({
  name: Yup.string().required("Required"),
  cellphone: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});
