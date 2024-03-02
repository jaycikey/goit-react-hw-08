import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import css from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
          to="/phone"
        >
          Phone
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
