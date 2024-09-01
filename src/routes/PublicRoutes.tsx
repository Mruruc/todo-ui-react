import PublicLayout from "../layouts/PublicLayout.js";
import HomePage from "../pages/public/HomePage.js";
import LoginPage from "../pages/public/LoginPage.js";
import SignUpPage from "../pages/public/SignUpPage.js";


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
