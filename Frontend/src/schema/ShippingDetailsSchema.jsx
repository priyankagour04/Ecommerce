import * as Yup from "yup";

const validationSchema = Yup.object({
  streetAddress: Yup.string()
    .min(3, "Street address must be at least 3 characters long")
    .required("Street address is required"),

  country: Yup.string()
    .required("Country is required"),

  city: Yup.string()
    .required("City is required"),

  state: Yup.string()
    .required("State is required"),

  zipCode: Yup.string()
    .min(5, "ZIP code must be at least 5 characters long") // Common length for zip code in many countries
    .max(10, "ZIP code cannot exceed 10 characters")
    .required("ZIP code is required"),
});

export default validationSchema;
