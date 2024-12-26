import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AuthContext from "./auth/AuthContext";
import privateRoutes from "./routes/PrivateRoutes";
import publicRoutes from "./routes/PublicRoutes";
import { refreshTokenRequest } from "./services/api/api-calls";

const route = createBrowserRouter([publicRoutes, privateRoutes]);

function App() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    token ||
      refreshTokenRequest()
        .then((newToken) => {
          setToken(newToken);
          setLoading(false);
        })
        .catch((error) => {
          console.log("In App component!");
          console.log(error);
          setLoading(false);
          redirect("/login");
        });
  }, [token]);

  return (
    <>
      <AuthContext.Provider value={{ token, setToken, loading }}>
        <RouterProvider router={route} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
