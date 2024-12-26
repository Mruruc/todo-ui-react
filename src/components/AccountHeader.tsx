import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import { logout } from "../services/api/api-calls";

const AccountHeader = () => {
  const { setToken } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setToken(undefined);
  };

  return (
    <header className="bg-body-tertiary">
      <nav className="d-flex justify-content-around align-items-center">
        <NavLink to="/to-do" className="fs-1 navbar-brand px-4">
          #To-Dos
        </NavLink>
        <NavLink to="new-todo" className="link-info fs-3" role="button">
          New Todo
        </NavLink>
        <button onClick={handleLogout} className="btn btn-warning" role="button">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default AccountHeader;
