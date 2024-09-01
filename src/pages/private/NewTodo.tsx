import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../auth/AuthContext";
import { postOrPutRequest } from "../../services/api/api-calls";
import { GenericError, Todo, TodoValidationErrors } from "./types";

const URI = "/to-do";

const NewTodo = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [getError, setError] = useState<TodoValidationErrors & GenericError>({});

  const [getTodo, setTodo] = useState<Todo>({
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setTodo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    postOrPutRequest(URI, getTodo, undefined, token)
      .then(() => navigate("/to-do", { replace: true }))
      .catch((exception) =>
        exception.errors ? setError(exception.errors) : setError({message:exception.message})
      );
  }

  return (
    <>
      <div className="row align-content-start justify-content-lg-center pt-5 ">
        <div className="col-5 p-4 form-container">
          <h1 className="mb-4">New ToDo</h1>

          <form onSubmit={handleFormSubmission} autoComplete="on">
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="desc"
                name="description"
                value={getTodo.description}
                onChange={handleInputChange}></textarea>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
              {getError?.endDate && (
                <div className="text-danger">{getError.endDate}</div>
              )}
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="btn btn-success px-md-4">
                Add
              </button>
            </div>
          </form>
          {getError?.message && (
            <div className="text-danger">{getError.message}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewTodo;
