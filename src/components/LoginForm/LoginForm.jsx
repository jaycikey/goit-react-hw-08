import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import { TextField, Box, Container, Typography } from "@mui/material";
import Button from "../MUIButton/MUIButton";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .test(
        "is-not-empty",
        "Email cannot be just spaces",
        (value) => value?.trim().length > 0
      ),
    password: Yup.string()
      .required("Required")
      .test(
        "is-not-empty",
        "Password cannot be just spaces",
        (value) => value?.trim().length > 0
      ),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      resetForm();
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Box sx={{ my: 2 }}>
              <Typography variant="h6">Login</Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                required
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Field
                as={TextField}
                fullWidth
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                required
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
