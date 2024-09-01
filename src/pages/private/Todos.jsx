import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import { deleteRequest, getRequest } from "../../services/api/api-calls";

const URI = "/to-do";
const Todos = () => {
  const { token,setToken} = useContext(AuthContext);
  const [getError,setError]= useState(undefined);
  const [getToDos, setToDos] = useState([]);

  useEffect(() => {
    getRequest(URI,token)
    .then((response)=>setToDos(response))
    .catch((exception)=>setError(exception.message));
  }, [token]);
  
  function removeTodo(todoId){
    deleteRequest(`${URI}/${todoId}`,token)
    .then((response)=>{
        setToDos(
          getToDos.filter(todo=> todo.toDoId !== todoId)
        );
    })
    .catch((exception)=>console.log(exception));
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
          {getToDos.length !== 0 &&
            getToDos.map((todo) => {
              return (
                <tr key={todo.toDoId}>
                  <td>
                    <NavLink
                      to="/to-do/todo-details"
                      state={todo}
                      className="link-info">
                      {todo.toDoId}
                    </NavLink>
                  </td>
                  <td>
                    <NavLink
                      to="/to-do/todo-details"
                      state={todo}
                      className="link-primary">
                      {todo.description}
                    </NavLink>
                  </td>

                  <td>{todo.startDate}</td>
                  <td>{todo.endDate}</td>
                  <td>
                    <NavLink
                      to="/to-do/todo-details"
                      state={todo}
                      className="btn btn-link">
                      Update
                    </NavLink>
                  </td>
                  <td onClick={()=>{removeTodo(todo.toDoId)}} >
                    <button className="btn btn-danger"> Delete </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {getError && <h3 className="text-danger">{getError}</h3>}
    </>
  );
};

export default Todos;
