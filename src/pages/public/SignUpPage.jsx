import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postOrPutRequest } from "../../services/api/api-calls";
import { passwordValidation } from "../../services/validations/validation-util";

const URI = "/auth/signup";

const SignUpPage = () => {
  const [getUser, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRetype: "",
  });

  const navigate = useNavigate();
  const [getError, setError] = useState({});

  function handleInputs(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    !passwordValidation(getUser.password, getUser.passwordRetype)
      ? setError({ passwordMistMatch: "Passwords mismatch!" })
      : setError({});
    postOrPutRequest(URI, getUser)
      .then((response) => {
        response.status === 201
          ? navigate("/login", { replace: true })
          : setError(response.errors);
      })
      .catch((error) => console.log(error));
  }

  return (
    <main className="main-container container d-flex align-items-center justify-content-center">
      <div className="w-100 p-4 mt-4 pt-2 form-container">
        <NavLink to="/login" className="link-info fs-4">
          Already have an Account ?
        </NavLink>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleFormSubmission} autoComplete="on">
          <div className="mb-2">
            <label htmlFor="f_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="f_name"
              name="firstName"
              value={getUser.firstName}
              onChange={handleInputs}
              required
            />
            <div className="text-danger">{getError?.firstName}</div>
          </div>
          <div className="mb-2">
            <label htmlFor="l_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="l_name"
              name="lastName"
              value={getUser.lastName}
              onChange={handleInputs}
              required
            />
            <div className="text-danger">{getError?.lastName}</div>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={getUser.email}
              onChange={handleInputs}
              required
            />
            <div className="text-danger">{getError?.email}</div>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={getUser.password}
              onChange={handleInputs}
              required
            />
            <div className="text-danger">{getError?.password}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password_retype" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password_retype"
              name="passwordRetype"
              value={getUser.passwordRetype}
              onChange={handleInputs}
              required
            />
            <div className="text-danger">{getError?.passwordRetype}</div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </div>
        </form>
        <div className="text-danger">{getError?.passwordMistMatch}</div>
      </div>
    </main>
  );
};

export default SignUpPage;
