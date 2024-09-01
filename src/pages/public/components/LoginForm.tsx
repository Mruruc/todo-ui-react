import { LoginFormComponentProps} from "../types";

const LoginForm = ({
  getCredential,
  getError,
  handleInputs,
  handleFormSubmission,
}: LoginFormComponentProps) => {
  return (
    <>
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
            <div className="text-danger">{getError.email}</div>
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
    </>
  );
};
export default LoginForm;
