import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-body-secondary mt-4  text-center pt-1 pb-1">
      <p className="mt-2">
        All right reserved &nbsp;
        <NavLink to="https://github.com/Mruruc" className="link-info">
          Mr.Uruc
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
