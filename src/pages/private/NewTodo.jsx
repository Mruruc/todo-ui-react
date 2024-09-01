import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../auth/AuthContext";
import { postOrPutRequest } from "../../services/api/api-calls";

const URI = "/to-do";

const NewTodo = () => {
  const {token}= useContext(AuthContext);
  const navigate = useNavigate();
  const [getError, setError] = useState("");
  const [getTodo, setTodo] = useState({
    description: "",
    startDate: "",
    endDate: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setTodo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    postOrPutRequest(URI,getTodo,undefined,token)
      .then((response) => {
        response.status === 201
          ? navigate("/to-do", { replace: true })
          : setError(response.errors);
      })
      .catch((exception) => console.log(exception));
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
                type="text"
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
        </div>
      </div>
    </>
  );
};

export default NewTodo;
