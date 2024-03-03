import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import { TextField, Box, Container, Typography } from "@mui/material";
import Button from "../MUIButton/MUIButton";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await dispatch(logIn({ email, password })).unwrap();
      toast.success("Login successful!");
      e.target.reset();
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box sx={{ my: 2 }}>
          <Typography variant="h6">Login</Typography>
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
          <Button type="submit">Log In</Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginForm;
