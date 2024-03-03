import { AppBar as MuiAppBar, Toolbar, Box } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
