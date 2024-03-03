import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Box, Typography } from "@mui/material";
import Button from "../MUIButton/MUIButton";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      <Button
        onClick={() => dispatch(logOut())}
        variant="outlined"
        color="inherit"
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
