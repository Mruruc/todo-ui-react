import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContext from "./auth/AuthContext";
import privateRoutes from "./routes/PrivateRoutes";
import publicRoutes from "./routes/PublicRoutes";

const route = createBrowserRouter([publicRoutes, privateRoutes]);

function App() {
  const [token, setToken] = useState<string | undefined>(undefined);
  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <RouterProvider router={route} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
