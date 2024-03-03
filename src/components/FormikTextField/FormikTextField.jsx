import { TextField } from "@mui/material";

const FormikTextField = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      error={Boolean(touched[field.name] && errors[field.name])}
      helperText={touched[field.name] && errors[field.name]}
    />
  );
};

export default FormikTextField;
