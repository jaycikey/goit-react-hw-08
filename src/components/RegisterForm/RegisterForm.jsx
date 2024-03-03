import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import { Box, Container, Typography } from "@mui/material";
import FormikTextField from "../FormikTextField/FormikTextField";
import Button from "../MUIButton/MUIButton";
import * as Yup from "yup";

const registrSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols long")
    .max(50, "Name must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Name cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  email: Yup.string()
    .min(3, "Email must be at least 3 symbols long")
    .max(50, "Email must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Email cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  password: Yup.string()
    .min(3, "Password must be at least 3 symbols long")
    .max(50, "Password must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Password cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("Registration successful!");
      resetForm();
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={registrSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Register</Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <Field
                name="name"
                component={FormikTextField}
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Field
                name="email"
                component={FormikTextField}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                type="email"
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Field
                name="password"
                component={FormikTextField}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
              />
            </Box>
            <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
              <Button type="submit" disabled={isSubmitting}>
                Register
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
