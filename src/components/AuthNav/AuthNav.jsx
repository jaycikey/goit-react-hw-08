import { Link as RouterLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button component={RouterLink} to="/register" color="inherit">
        Register
      </Button>
      <Button component={RouterLink} to="/login" color="inherit">
        Log In
      </Button>
    </Stack>
  );
};

export default AuthNav;
