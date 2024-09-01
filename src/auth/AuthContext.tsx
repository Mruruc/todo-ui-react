import { createContext } from "react";

export type SetTokenFunction = (token: string | undefined) => void;

export interface AuthToken {
  token: string | undefined;
  setToken: SetTokenFunction;
}

const AuthContext = createContext<AuthToken>({
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
