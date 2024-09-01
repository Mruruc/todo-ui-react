import { RegistrationFormComponentProps } from "../types";

const RegistrationForm = ({
  getUser,
  getError,
  handleInputs,
  handleFormSubmission,
}: RegistrationFormComponentProps) => {
  return (
    <>
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
    </>
  );
};
export default RegistrationForm;
