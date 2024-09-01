import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import AuthContext from "../../auth/AuthContext";
import { postOrPutRequest } from "../../services/api/api-calls";
import { GenericError, Todo, TodoValidationErrors } from "./types";

const URI = "/to-do";
const TodoDetails = () => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const [getError, setError] = useState<TodoValidationErrors & GenericError>({});
  const [getSuccessMessage, setSuccessMessage] = useState<string | undefined>(undefined);

  const [getTodo, setTodo] = useState<Todo>({
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    location?.state && setTodo(location.state);
  }, [location.state]);

  function handleInputsChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setTodo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    postOrPutRequest(
      `${URI}/${getTodo.toDoId}`,
      getTodo,
      undefined,
      token,
      "PUT"
    )
      .then(() => setSuccessMessage("Todo Updated Successfully"))
      .catch((exception) => exception.errors ? setError(exception.errors) : setError({message:exception.message}));
  }

  return (
    <>
      <div className="row align-content-start justify-content-lg-center mt-5 mb-5">
        <div className="col-5 p-4 form-container">
          <h1 className="mb-4">Todo Details</h1>

          <form onSubmit={handleFormSubmission} autoComplete="on">
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                className="form-control pb-5"
                id="desc"
                name="description"
                value={getTodo.description}
                onChange={handleInputsChange}
              />

              {getError?.description && (
                <div className="text-danger">{getError.description}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="s_date" className="form-label">
                Start Date
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="s_date"
                name="startDate"
                value={getTodo.startDate}
                onChange={handleInputsChange}
              />
              {getError?.startDate && (
                <div className="text-danger">{getError.startDate}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="end_date" className="form-label">
                End Date
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="end_date"
                name="endDate"
                value={getTodo.endDate}
                onChange={handleInputsChange}
              />
              {getError?.endDate && (
                <div className="text-danger">{getError.endDate}</div>
              )}
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-success px-md-4">
                Update
              </button>
            </div>
            {getSuccessMessage && (
              <div className="text-success">{getSuccessMessage}</div>
            )}
          </form>
          {getError?.message && <h1>{getError.message}</h1>}
        </div>
      </div>
    </>
  );
};

export default TodoDetails;
