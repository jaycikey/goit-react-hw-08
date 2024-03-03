import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import { TextField, Box, Container, Typography } from "@mui/material";
import Button from "../MUIButton/MUIButton";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      await dispatch(register({ name, email, password })).unwrap();
      toast.success("Registration successful!");
      form.reset();
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{ my: 2 }}>
          <Typography variant="h6">Register</Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            label="Username"
            name="name"
            variant="outlined"
            required
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            required
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            required
          />
        </Box>
        <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
          <Button type="submit">Register</Button>
        </Box>
      </form>
    </Container>
  );
};

export default RegisterForm;
