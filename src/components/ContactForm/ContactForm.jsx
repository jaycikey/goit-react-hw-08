import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import MUIButton from "../MUIButton/MUIButton";
import { addContact } from "../../redux/phone/operations";
import FormikTextField from "../FormikTextField/FormikTextField";
import toast from "react-hot-toast";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols long")
    .max(50, "Name must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Name cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  number: Yup.string()
    .min(3, "Phone must be at least 3 symbols long")
    .max(50, "Phone must be at less 50 symbols long")
    .required("This is a required field")
    .test(
      "is-not-empty",
      "Phone cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(addContact(values)).unwrap();
      toast.success("Contact added successfully!");
      resetForm();
    } catch (error) {
      toast.error(
        `Failed to add contact: ${error.message || "Please try again."}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box marginBottom={2}>
            <Field
              name="name"
              component={FormikTextField}
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Box>
          <Box marginBottom={2}>
            <Field
              name="number"
              component={FormikTextField}
              label="Phone"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Box>
          <Box textAlign="center">
            <MUIButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Add Contact
            </MUIButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
