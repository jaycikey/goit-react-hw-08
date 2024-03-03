import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button, Stack } from "@mui/material";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/"
        style={({ isActive }) => ({
          textDecoration: "none",
          color: isActive ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#1976d2" : "rgba(0, 0, 0, 0.87)",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Contacts
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
