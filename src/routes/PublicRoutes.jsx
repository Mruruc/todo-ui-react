import PublicLayout from "../layouts/PublicLayout.jsx";
import HomePage from "../pages/public/HomePage.jsx";
import LoginPage from "../pages/public/LoginPage.jsx";
import SignUpPage from "../pages/public/SignUpPage.jsx";


const publicRoutes = {
  path: "/",
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "sign-up",
      element: <SignUpPage />,
    },
  ],
};
export default publicRoutes;
