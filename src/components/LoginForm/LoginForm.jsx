import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import { Box, Container, Typography } from "@mui/material";
import Button from "../MUIButton/MUIButton";
import { Formik, Form, Field } from "formik";
import FormikTextField from "../FormikTextField/FormikTextField";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      resetForm();
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Login</Typography>
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
                Log In
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
