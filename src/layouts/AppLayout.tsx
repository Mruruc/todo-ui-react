import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import AuthContext from "../auth/AuthContext";
import AccountHeader from "../components/AccountHeader";
import Footer from "../components/Footer";

const AppLayout = () => {
  const { token } = useContext(AuthContext);
  return (
    <>
      <AccountHeader />
      <main className="container mt-3 account-main-container">
        {token ? <Outlet /> : <Navigate to={"/login"} />}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
