import { NavLink } from "react-router-dom";
import { TodoComponentProps } from "../types";

const TodoComponent = ({ todo, removeTodo }:TodoComponentProps) => {
  return (
    <tr>
      <td>
        <NavLink to="/to-do/todo-details" state={todo} className="link-info">
          {todo.toDoId}
        </NavLink>
      </td>
      <td>
        <NavLink to="/to-do/todo-details" state={todo} className="link-primary">
          {todo.description}
        </NavLink>
      </td>

      <td>{todo.startDate?.toString()}</td>
      <td>{todo.endDate?.toString()}</td>
      <td>
        <NavLink to="/to-do/todo-details" state={todo} className="btn btn-link">
          Update
        </NavLink>
      </td>
      <td
        onClick={() => {
          removeTodo(todo.toDoId!);
        }}>
        <button className="btn btn-danger"> Delete </button>
      </td>
    </tr>
  );
};
export default TodoComponent;
