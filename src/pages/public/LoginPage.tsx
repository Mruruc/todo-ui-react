import { ChangeEvent, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthContext.js";
import { postOrPutRequest } from "../../services/api/api-calls.js";
import LoginForm from "./components/LoginForm.js";
import { LoginCredentials, ValidationError } from "./types.js";

const URI = "/auth/authenticate";
const LoginPage = () => {
  const { setToken, token, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [getError, setError] = useState<ValidationError>({});

  const [getCredential, setCredential] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  function handleInputs(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCredential((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    postOrPutRequest<ValidationError>(URI, getCredential, setToken)
      .then(() => navigate("/to-do", { replace: true }))
      .catch((error) => setError(error));
  }

  useEffect(() => {
    token && navigate("/to-do");
  }, [token, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <main className="main-container d-flex flex-column">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="w-100 p-4 form-container">
          <NavLink to="/sign-up" className="link-info fs-4">
            Do not have an Account?
          </NavLink>
          <h2 className="text-center mb-4">Login</h2>
          {getError?.message && (
            <div className="text-danger pb-2 btn fs-5">{getError.message}</div>
          )}
          <LoginForm
            getCredential={getCredential}
            getError={getError}
            handleInputs={handleInputs}
            handleFormSubmission={handleFormSubmission}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
