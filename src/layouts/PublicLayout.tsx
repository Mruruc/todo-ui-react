import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
