import { useContext, useEffect, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import { deleteRequest, getRequest } from "../../services/api/api-calls";
import TodoComponent from "./components/TodoComponent";
import { Todo } from "./types";
import { NavLink } from "react-router-dom";

const URI = "/to-do";
const ToDos = () => {
  const { token } = useContext(AuthContext);
  const [getError, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [getToDos, setToDos] = useState<Todo[]>([]);

  useEffect(() => {
    token &&
      getRequest<Todo[]>(URI, token)
        .then((response) => {
          setToDos(response);
          setIsLoading(false);
        })
        .catch((exception) => setError(exception.message));
  }, [token]);

  function removeTodo(todoId: number) {
    token &&
      deleteRequest(`${URI}/${todoId}`, token)
        .then(() => {
          setToDos(getToDos.filter((todo) => todo.toDoId !== todoId));
        })
        .catch((exception) => setError(exception.message));
  }
  return (
    <>
      <h1>Todos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Todo Id</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && getToDos.length === 0 ? (
            <tr>
              <td>
                <NavLink to={"new-todo"} className="text-success fs-4">
                  No ToDo yet, start to add todo....
                </NavLink>
              </td>
            </tr>
          ) : (
            getToDos.map((todo) => {
              return (
                <TodoComponent
                  key={todo.toDoId}
                  todo={todo}
                  removeTodo={removeTodo}
                />
              );
            })
          )}
        </tbody>
      </table>
      {isLoading && <h1 className="text-info">Loading ...</h1>}
      {getError && <h3 className="text-danger">{getError}</h3>}
    </>
  );
};

export default ToDos;
