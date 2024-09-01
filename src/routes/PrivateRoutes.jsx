import AppLayout from "../layouts/AppLayout";
import NewTodo from "../pages/private/NewTodo";
import TodoDetails from "../pages/private/TodoDetails";
import Todos from "../pages/private/Todos";

const privateRoutes = {
  path: "/to-do",
  element: <AppLayout />,
  children: [
    {
      index: true,
      element: <Todos />,
    },
    {
      path: "new-todo",
      element: <NewTodo />,
    },
    {
      path: "todo-details",
      element: <TodoDetails />,
    },
  ],
};
export default privateRoutes;
