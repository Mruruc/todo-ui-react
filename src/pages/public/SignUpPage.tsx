import { ChangeEvent, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import { postOrPutRequest } from "../../services/api/api-calls";
import { passwordValidation } from "../../services/validations/validation-util";
import RegistrationForm from "./components/RegistrationForm";
import { User, ValidationError } from "./types";

const URI = "/auth/signup";

const SignUpPage = () => {
  const { token, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [getUser, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRetype: "",
  });

  const [getError, setError] = useState<ValidationError>({});

  function handleInputs(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    passwordValidation(getUser.password, getUser.passwordRetype)
      ? postOrPutRequest<ValidationError>(URI, getUser)
          .then(() => navigate("/login", { replace: true }))
          .catch((error) => setError(error))
      : setError({ passwordMistMatch: "Passwords mismatch!" });
  }

  useEffect(() => {
    token && navigate("/to-do");
  }, [token, navigate]);

  //if (loading) return <div>Loading...</div>;

  return (
    <main className="main-container container d-flex align-items-center justify-content-center">
      <div className="w-100 p-4 mt-4 pt-2 form-container">
        <NavLink to="/login" className="link-info fs-4">
          Already have an Account ?
        </NavLink>

        <h2 className="text-center mb-4">Sign Up</h2>

        <RegistrationForm
          getUser={getUser}
          getError={getError}
          handleInputs={handleInputs}
          handleFormSubmission={handleFormSubmission}
        />

        <div className="text-danger">{getError?.passwordMistMatch}</div>
      </div>
    </main>
  );
};

export default SignUpPage;
