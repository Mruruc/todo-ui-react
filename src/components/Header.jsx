import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-body-tertiary">
      <nav className="d-flex justify-content-around align-items-center">
        <NavLink to="/" className="fs-1 navbar-brand px-4">
          #To-Dos
        </NavLink>
        <NavLink to="/" className="active link-info fs-5">
          Home
        </NavLink>
        <NavLink to="/" className="link-underline-info fs-5">
          About
        </NavLink>
        <NavLink to="login" className="btn btn-primary ">
          Login
        </NavLink>
        <NavLink to="sign-up" className="btn btn-info ">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
