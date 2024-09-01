import { createBrowserRouter, RouterProvider } from "react-router-dom";
import privateRoutes from "./routes/PrivateRoutes";
import publicRoutes from "./routes/PublicRoutes";
import { useState } from "react";
import AuthContext from "./auth/AuthContext";

const route = createBrowserRouter([publicRoutes, privateRoutes]);

function App() {
  const [token, setToken] = useState(undefined);
  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <RouterProvider router={route} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
