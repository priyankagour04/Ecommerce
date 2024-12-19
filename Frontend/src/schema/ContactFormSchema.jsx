import * as Yup from "yup";

  
    const validationSchema = Yup.object({
        fullName: Yup.string()
          .min(3, "Full Name must be at least 3 characters long")
          .required("Full Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        address: Yup.string()
          .required("Address is required"),
        message: Yup.string()
          .min(10, "Message must be at least 10 characters long")
          .required("Message is required"),
      });


export default validationSchema