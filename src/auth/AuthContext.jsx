import { createContext } from "react";

const AuthContext = createContext({
  token: undefined,
  setToken: () => {},
});

export default AuthContext;

// provider component

/* export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(undefined);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}; */
