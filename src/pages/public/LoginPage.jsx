import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postOrPutRequest } from "../../services/api/api-calls.js";
import AuthContext from "../../auth/AuthContext";

const URI = "/auth/authenticate";
const LoginPage = () => {
  const { token, setToken } = useContext(AuthContext);
  const [getError, setError] = useState({});
  const navigate = useNavigate();
  const [getCredential, setCredential] = useState({
    email: "",
    password: "",
  });

  function handleInputs(event) {
    const { name, value } = event.target;
    setCredential((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  
  function handleFormSubmission(event) {
    event.preventDefault();
    postOrPutRequest(URI, getCredential, setToken)
      .then((response) => {
        response.status === 200
          ? navigate("/to-do", { replace: true })
          : setError(
              response.description
                ? { description: response.description }
                : response.errors
            );
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <main className="main-container d-flex flex-column">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="w-100 p-4 form-container">
          <NavLink to="/sign-up" className="link-info fs-4">
            Do not have an Account?
          </NavLink>
          <h2 className="text-center mb-4">Login</h2>
          {getError?.description && (
            <div className="text-danger pb-2 btn fs-5">
              {getError.description}
            </div>
          )}

          <form onSubmit={handleFormSubmission} autoComplete="on">
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control rounded-3"
                id="email"
                name="email"
                value={getCredential.email}
                onChange={handleInputs}
                required
              />
              {getError?.email && (
                <dv className="text-danger">{getError.email}</dv>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-3"
                id="password"
                name="password"
                value={getCredential.password}
                onChange={handleInputs}
                required
              />
              {getError?.password && (
                <div className="text-danger">{getError.password}</div>
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
