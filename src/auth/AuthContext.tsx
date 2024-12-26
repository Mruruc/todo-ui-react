import { createContext } from "react";

export type SetTokenFunction = (token: string | undefined) => void;

export interface AuthType {
  token: string | undefined;
  setToken: SetTokenFunction;
  loading: boolean;
}

const AuthContext = createContext<AuthType>({
  token: undefined,
  setToken: () => {},
  loading: false,
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
